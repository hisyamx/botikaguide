export default {
	template: `<div>
		<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    		<h1 class="h2">Helpdesk</h1>
  		</div>

		  <!-- detail section -->
		  <div class="info">
			  <div>
				  <h4>
					  Respond
				  </h4>
				  <h5>
					  Send text to user. <br> Visible to User: No.
				  </h5>
				  <figure class="highlight">
					  respondText(string $text) <br> respondText("Hai, apa kabar hari ini?");
				  </figure>
				  <h5>
					  "Send text-to-speech audio to user voiceCharacter can be: botika_female_1 (default), botika_female_2 isoLanguageCode default: ""id-ID"""<br> Visible to User: No.
				  </h5>
				  <figure class="highlight">
					  respondTextToSpeech(string $text [, string $voiceCharacter, string $isoLanguageCode]) <br> respondTextToSpeech("Halo, apa yang bisa saya bantu?");
				  </figure>
				  <h5>
					  "Send button to user. Button variable is multi dimensional array with the following format: Array ( Array ( ""type"" => ""text"", ""text"" => ""Button Caption #1"", ""payload"" => ""Data to send back"", ) ) ""type"" can be: text Payload data will sent
					  back as user message url User will be directed to url stated in payload location User will send his longitude and latitude location data phone Phone will dial number stated in payload modal Open a modal form with content taken
					  from url in payload (only available in webchat) popup open a popup browser window with content taken from url in payload (only available in webchat)"<br> Visible to User: No.
				  </h5>
				  <figure class="highlight">
					  respondButton(array $button) <br> "respondButton(Array ( Array ( ""type"" => ""text"", ""text"" => ""Tekan Ini"", ""payload"" => ""dataku"", ), Array ( ""type"" => ""url"", ""text"" => ""Buka Website"", ""payload"" => ""http://botika.online/"",
					  ) ) );"
				  </figure>
				  <h5>
					  Send text and button to user.<br> Visible to User: No.
				  </h5>
				  <figure class="highlight">
					  respondTextButton(string $text, array $button) <br> "respondTextButton(""Tekan tombol berikut:"", Array ( Array ( ""type"" => ""text"", ""text"" => ""Tekan Ini"", ""payload"" => ""tombol 1 ditekan"", ), ) );"
				  </figure>
				  <h5>
					  Send image to user<br> Visible to User: No.
				  </h5>
				  <figure class="highlight">
					  respondImage(string $url) <br> respondImage("https://blog.botika.online/wp-content/uploads/2019/04/55957878_2588079721208266_8916285117227909291_n.jpg");
				  </figure>
				  <h5>
					  "Send carousel to user. Carousel variable is multi dimensional array with the following format: Array ( Array ( ""title"" => ""Card Title #1"", ""subtitle"" => ""Subtitle"", ""image"" => ""https://botmaster2.botika.online/assets/uploads/b9rykqr3g1k/pics/2018/08/categories/cb9rykqr3g1kzolhrd4614.jpg"",
					  ""button"" => Array( Array ( ""type"" => ""text"", ""text"" => ""Button Caption #1"", ""payload"" => ""Data to send back"", ) ) ) )"<br> Visible to User: No.
				  </h5>
				  <figure class="highlight">
					  respondCarousel(array $carousel) <br> "respondCarousel(Array ( Array ( ""title"" => ""Judul Card #1"", ""subtitle"" => ""Subtitle #1"", ""image"" => ""https://botmaster2.botika.online/assets/uploads/b9rykqr3g1k/pics/2018/08/categories/cb9rykqr3g1kzolhrd4614.jpg"",
					  ""button"" => Array( Array ( ""type"" => ""text"", ""text"" => ""Klik Ini"", ""payload"" => ""Data payload"", ) ) ), Array ( ""title"" => ""Judul Card #2"", ""subtitle"" => ""Subtitle #2"", ""image"" => ""https://botmaster2.botika.online/assets/uploads/b9rykqr3g1k/pics/2018/08/categories/cb9rykqr3g1k0eqdowfkav.jpg"",
					  ""button"" => Array( Array ( ""type"" => ""phone"", ""text"" => ""Telephone"", ""payload"" => ""081802207000"", ) ) ) ) );"
				  </figure>
				  <h5>
					  Send carousel with additional button below it<br> Visible to User: No.
				  </h5>
				  <figure class="highlight">
					  respondCarouselButton(array $carousel, array $button) <br> "respondCarouselButton(Array ( Array ( ""title"" => ""Judul Card Button #1"", ""subtitle"" => ""Subtitle #1"", ""image"" => ""https://botmaster2.botika.online/assets/uploads/b9rykqr3g1k/pics/2018/08/products/pb9rykqr3g1k562obmqu73.png"",
					  ""button"" => Array( Array ( ""type"" => ""text"", ""text"" => ""Klik Ini"", ""payload"" => ""Data yang dikirim balik"", ) ) ) ), Array ( Array ( ""type"" => ""text"", ""text"" => ""Button"", ""payload"" => ""Tambahan button"",
					  ) ) );"
				  </figure>
				  <h5>
					  Send audio to user<br> Visible to User: No.
				  </h5>
				  <figure class="highlight">
					  respondAudio(string $url) <br> respondAudio("https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3");
				  </figure>
				  <h5>
					  Send video to user<br> Visible to User: No.
				  </h5>
				  <figure class="highlight">
					  respondVideo(string $url) <br> respondVideo("https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4");
				  </figure>
				  <h5>
					  Send document to user<br> Visible to User: No.
				  </h5>
				  <figure class="highlight">
					  respondDocument(string $url) <br> respondDocument("https://file-examples-com.github.io/uploads/2017/02/file-sample_100kB.doc");
				  </figure>
				  <h5>
					  Send random text taken from array to user<br> Visible to User: No.
				  </h5>
				  <figure class="highlight">
					  respondRandomText(array $textArray) <br> "respondRandomText(Array( ""Selamat datang"", ""senang bertemu anda"", ""Apa kabarnya?"" ) );"
				  </figure>
				  <h5>
					  "textArray variable is multi dimensional array with the following format: Array( Array( ""text"" => ""text to be synthesized"", ""voice"" => ""botika_female_1"", ""language"" => ""id-ID"" ) )"
				  </h5>
				  <figure class="highlight">
					  respondRandomTextToSpeech(array $textArray) <br> "respondRandomTextToSpeech(Array( Array( ""text"" => ""halo, siapa namamu?"", ""voice"" => ""botika_female_1"", ""language"" => ""id-ID"" ), Array( ""text"" => ""selamat siang,
					  sudah makan belum?"", ""voice"" => ""botika_female_1"", ""language"" => ""id-ID"" ), Array( ""text"" => ""tinggalmu di mana?"", ""voice"" => ""botika_female_1"", ""language"" => ""id-ID"" ), ) );"
				  </figure>
			  </div>
		  </div>
		  <!-- end detail section -->
	</div>`
}