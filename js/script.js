function generarGrafico() {
  // Obtener valores del formulario
  const mesesInput = document.getElementById("meses").value;
  const ventasInput = document.getElementById("ventas").value;

  
  if (!mesesInput || !ventasInput) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  
  const meses = mesesInput.split(",").map(mes => mes.trim());
  const ventas = ventasInput.split(",").map(venta => parseFloat(venta.trim()));

  
  if (meses.length !== ventas.length) {
    alert("El número de meses debe coincidir con el número de ventas.");
    return;
  }

  
  const ctx = document.getElementById("graficoVentas").getContext("2d");

  
  if (window.myChart) {
    window.myChart.destroy();
  }

  
  window.myChart = new Chart(ctx, {
    type: "bar", // Tipo de gráfico: barra
    data: {
      labels: meses, // Etiquetas del eje X
      datasets: [{
        label: "Ventas por Mes",
        data: ventas, // Datos del eje Y
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
