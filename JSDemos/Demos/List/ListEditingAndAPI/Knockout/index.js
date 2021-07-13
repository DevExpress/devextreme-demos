window.onload = function() {
    var deleteType = ko.observable("toggle"),
        allowDeletion = ko.observable(false);

    var viewModel = {
        listOptions: {
            dataSource: tasks,
            height: 400,
            allowItemDeleting: allowDeletion,
            itemDeleteMode: deleteType,
        },
        deleteTypeOptions: {
            dataSource: ["static", "toggle", "slideButton", "slideItem", "swipe", "context"],
            disabled: ko.computed(function() {
                return !allowDeletion();
            }),
            value: deleteType
        },
        allowDeletionOptions: {
            value: allowDeletion,
            text: "Allow deletion"
        }
    };

    ko.applyBindings(viewModel, document.getElementById("list-api-demo"));
};