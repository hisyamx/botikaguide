export default {
	template: `<div>
		<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    		<h1 class="h2">Helpdesk</h1>
  		</div>

		  <div class="info">
		  <div>
			  <h4>
				  Report
			  </h4>
			  <h5>
				  "Write report data. The report can be viewed at Botmaster keyValuePair is array with free key name and value Arry( ""customKey"" => ""customValue"", ""additionalKey"" => ""additionalValue"" )" <br>Visible to User: No.
			  </h5>
			  <figure class="highlight">
				  reportWrite(string $reportGroup, string $reportTitle, array $keyValuePair) <br>"reportWrite(""Report Group"", ""Judul Report"", Array( ""tanggal"" => date(""Y-n-j""), ""produk"" => ""{{user.cartItem}}"", ""jumlah"" => ""{{user.cartQty}}"",
				  ""total"" => ""{{user.cartSubtotal}}"" ) );"
			  </figure>
		  </div>
	  </div>
	  <!-- end detail section -->
	</div>`
}