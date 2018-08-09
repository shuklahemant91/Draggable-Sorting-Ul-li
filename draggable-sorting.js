 var drag_dropList = function(obj) {
        var _this = this,
            draggableNode = false;

        _this.parent = document.getElementById(obj.parentId);


        _this.parent.addEventListener('drag', function(event) {
            if(event.target.draggable){
                draggableNode = event.target;
                this.removeChild(draggableNode)
            }
        })


        _this.parent.addEventListener("dragstart", function(event) {
            event.target.style.backgroundColor = obj.draggedElemColor;
        });

        _this.parent.addEventListener("dragend", function(event) {
            event.target.style.backgroundColor = "#000000";
        });


        _this.parent.addEventListener("dragover", function(event) {
            event.preventDefault();
        });

        _this.parent.addEventListener("dragenter", function(event) {
            event.target.style.backgroundColor = obj.dropZoneColor;

        });

        _this.parent.addEventListener("dragleave", function(event) {
            event.target.style.backgroundColor = "#000000";
        });

        _this.parent.addEventListener("drop", function(event) {
            event.preventDefault();
            draggableNode.style.backgroundColor = "#000000";
            event.target.style.backgroundColor = "#000000";
            this.insertBefore(draggableNode, event.target);
            draggableNode = false;

        });
    }


    drag_dropList({
        parentId : 'mainC',
        draggedElemColor : "#ffe4c4",
        dropZoneColor: "#cccccc"
    })