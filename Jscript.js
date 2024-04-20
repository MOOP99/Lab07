document.getElementById("colorForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    var color = document.getElementById("colorInput").value;
    document.getElementById("heading").style.color = color;
});
