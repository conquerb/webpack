module.exports = {

    uploadFile: function(obj, fn_progress, fn_complete, fn_failed) {
        fn_progress = fn_progress || this.uploadProgress;
        fn_complete = fn_complete || this.uploadComplete;
        fn_failed = fn_failed || this.uploadFailed;
        var fn_canceled = this.uploadCanceled;

        var objectName = obj.objectName;
        var objectType = obj.objectType;

        if (obj.files.length > 0) {
            if (typeof(objectType) == "undefined" || objectType == null || objectType == "" || objectType == "undefined")
                objectType = "picture";
            var objName = {
                objectName: objectName,
                objectType: objectType
            };
            var fd = new FormData();
            if (objectType == "picture") {
                var cropWidth = obj.cropWidth;
                if (cropWidth != "undefined" && parseInt(cropWidth) != 0)
                    fd.append("sw", cropWidth);
                var cropHeight = obj.cropHeight;
                if (cropHeight != "undefined" && parseInt(cropHeight) != 0)
                    fd.append("sh", cropHeight);
            }
            fd.append("data", objectName);
            fd.append("clientid", typeof(clientid) == "undefined" ? 123583184 : clientid);
            fd.append("token", typeof(token) == "undefined" ? '507d4e33ac7e13319c46122094963a26' : token);
            fd.append("objectName", objectName);
            fd.append("fileToUpload", obj.files[0]);
            var xhr = new XMLHttpRequest();
            xhr.upload.addEventListener("progress", fn_progress.bind(objName), false);
            xhr.addEventListener("load", fn_complete.bind(objName), false);
            xhr.addEventListener("error", fn_failed.bind(objName), false);
            xhr.addEventListener("abort", fn_canceled.bind(objName), false);
            xhr.open("POST", (typeof(uploader_url) == "undefined" ? "http://uploader.ylznet.com/" : uploader_url) + "api/" + objectType + "/upload");
            xhr.send(fd);
        }
    },

    getParam: function(p, def) {
        return typeof(p) == "undefined" ? def : p;
    },

    uploadProgress: function(evt) {
        if (evt.lengthComputable) {
            var percentComplete = Math.round(evt.loaded * 100 / evt.total);
            if (percentComplete == 100)
                document.getElementById('result_' + this.objectName).innerHTML = "上传完成,正在处理..";
            else
                document.getElementById('result_' + this.objectName).innerHTML = "正在上传(" + percentComplete.toString() + '%)';
        } else {
            document.getElementById('result_' + this.objectName).innerHTML = "正在上传...";
        }
    },

    uploadComplete: function(evt) {
        console.log(evt);
        var sHtml = "上传完成.";
        var urls = eval("(" + evt.target.responseText + ")").message.split(",");
        var imgUrl = urls[0];
        if (urls.length > 1)
            imgUrl = urls[1] + "#" + urls[0];
        var imgStr = "";
        if (this.objectType == "picture")
            imgStr = "&nbsp;&nbsp;<img style='height: 30px;' src='" + imgUrl + "' />";
        sHtml += "&nbsp;&nbsp;&nbsp;&nbsp;<a href='" + imgUrl + "' target='_blank'>点击查看" + imgStr + "</a>";
        document.getElementById('result_' + this.objectName).innerHTML = sHtml;
        document.getElementById(this.objectName).value = imgUrl;
    },

    uploadFailed: function(evt) {
        alert("上传失败,请稍后重试.");
    },

    uploadCanceled: function(evt) {
        alert("您取消了上传.");
    }
}