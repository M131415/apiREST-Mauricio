function createPDF() {
    //Validar si el campo ID no esta vacio
    if (document.getElementById("id").value == ""){
        alert("Por favor ingresa el ID del estudiante");
    }
    else{

        // Crea una instancia de jsPDF
        var doc = new jsPDF();

        var id = $('#id').val()
        
        fetch('http://localhost:8080/user?id=' + id)
        .then(response => response.json())
        .then(data => datos = JSON.stringify(data))
        .then(data => datos1 = JSON.parse(data))
        
        // Define la ruta de la imagen que deseas agregar al PDF
        var imgData = 'data:image/jpeg;base64,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';
        doc.addImage(imgData, 'JPG', 150, 20, 50, 50);
        
        // Define las variables con los nombres de las materias y sus calificaciones
        var materias = [`${datos1.materia1}`, `${datos1.materia2}`, `${datos1.materia3}`, `${datos1.materia4}`, `${datos1.materia5}`];
        var calificaciones = [`${datos1.calificacion1}`, `${datos1.calificacion2}`, `${datos1.calificacion3}`, `${datos1.calificacion4}`, `${datos1.calificacion5}`];

        // Define los estilos para el título y el contenido
        var titleStyle = { fontSize: 20, fontStyle: 'bold', textColor: '#333' };
        var contentStyle = { fontSize: 12, textColor: '#555' };

        // Define el ancho y alto de la página
        var pageWidth = 230;
        var pageHeight = 150;
        var startX = 20;

        // Calcula la posición vertical para centrar la tabla
        var tableY = (pageHeight - 50) / 2; // 50 representa el tamaño total de la tabla (5 filas x 10 de altura de cada fila)

        // Agrega el título de la boleta
        doc.setTextColor(titleStyle.textColor);
        doc.setFontSize(titleStyle.fontSize);
        doc.setFontStyle(titleStyle.fontStyle);
        doc.text('Boleta de Calificaciones', startX+50, tableY - 30);

        // Agrega los datos del estudiante
        doc.setTextColor(contentStyle.textColor);
        doc.setFontSize(contentStyle.fontSize);
        doc.setFontStyle('normal');
        doc.text(`Nombre: ${datos1.nombre}`, startX+40, tableY - 10);
        doc.text(`Matrícula: ${datos1.matricula}`, startX+40, tableY);
        doc.text(`Número de semestre: ${datos1.semestre}`, startX+40, tableY + 10);
        doc.text(`Periodo escolar: ${datos1.periodo}`, startX+40, tableY + 20);

        // Agrega la tabla de materias y calificaciones
        var tableX = (pageWidth - 100) / 2; // Ancho de la tabla es de 100 unidades
        var lineHeight = 10;

        // Encabezado de la tabla
        doc.setFontStyle('bold');
        doc.text('Materias', tableX, tableY + 40);
        doc.text('Calificaciones', tableX + 70, tableY + 40);
        doc.line(tableX, tableY+43, tableX+100, tableY+43);

        // Contenido de la tabla
        doc.setFontStyle('normal');
        for (var i = 0; i < materias.length; i++) {
        doc.text(materias[i], tableX, tableY + 50 + (i * lineHeight));
        doc.text(calificaciones[i], tableX + 70, tableY + 50 + (i * lineHeight));
        }
        
        doc.save('boleta.pdf');
    } 
}



$('#guarda_estudiante').click(function(){
    var nombre = $('#nombre').val()
    var matricula = $('#matricula').val()
    var semestre = $('#semestre').val()
    var periodo = $('#periodo').val()
    var materia1 = $('#materia1').val()
    var calificacion1 = $('#calificacion1').val()
    var materia2 = $('#materia2').val()
    var calificacion2 = $('#calificacion2').val()
    var materia3 = $('#materia3').val()
    var calificacion3 = $('#calificacion3').val()
    var materia4 = $('#materia4').val()
    var calificacion4 = $('#calificacion4').val()
    var materia5 = $('#materia5').val()
    var calificacion5 = $('#calificacion5').val()

    var data_boleta = {'nombre': nombre, 
                        'matricula': matricula, 
                        'semestre': semestre, 
                        'periodo': periodo, 
                        'materia1': materia1,
                        'calificacion1': calificacion1,
                        'materia2': materia2,
                        'calificacion2': calificacion2,
                        'materia3': materia3,
                        'calificacion3': calificacion3,
                        'materia4': materia4,
                        'calificacion4': calificacion4,
                        'materia5': materia5,
                        'calificacion5': calificacion5,
    }

    $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/user',
        contentType: 'application/json',
        data: JSON.stringify(data_boleta)
    }).done(function(){
        alert('Estudiante almacenado')
    }).fail(function(err){
        alert(err)
    })
})

$('#obtener_boleta').click(function(){
    var id = $('#id').val()

    fetch('http://localhost:8080/user?id=' + id)
        .then(response => response.json())

        .then(data => datos = JSON.stringify(data))
        .then(data => datos1 = JSON.parse(data))
        .then(data => nombre1 = datos1.nombre)
        .then(data => matricula1 = datos1.matricula)
        .then(data => semestre1 = datos1.semestre)
        .then(data => periodo1 = datos1.periodo)
        .then(data => materia1 = datos1.materia)
        .then(data => calificacion1 = datos1.calificacion)

        .then(data => $('#nombre2').val(nombre1))
        .then(data => $('#matricula2').val(matricula1))
        .then(data => $('#semestre2').val(semestre1))
        .then(data => $('#periodo2').val(periodo1))
        
})