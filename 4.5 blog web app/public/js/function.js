var isEditClick = false;
//Show update button
$("#editBtn").click(function () {
    isEditClick = true;
    toggleEditUpdate();
});

//Show edit button
$("#updateBtn").click(function () {
    isEditClick = false;
    toggleEditUpdate();
});

$("#CreatePost").on("submit", function(event){
    if($("#TextArea").val().trim() === ""){
        alert("The content cannot be empty!");
        event.preventDefault(); // Prevent form submission
    }
});

function toggleEditUpdate(){

    const sourceText = $("#PostedTextArea").val();

    if(isEditClick){
        $("#updateBtn").removeAttr("hidden");
        $("#editBtn").attr("hidden", true);
        $("#PostedTextArea").attr("disabled", false);  
        $("#TextEditArea").val(sourceText);
        $("#TextEditArea").attr("hidden", false);  
        $("#PostedTextArea").attr("hidden", true);  

    }else{
        $("#editBtn").removeAttr("hidden");
        $("#updateBtn").attr("hidden", true);
        $("#PostedTextArea").attr("disabled", true);  
        $("#TextEditArea").attr("hidden", true); 
        $("#PostedTextArea").attr("hidden", false);  
    }
}