

		/*保存*/
		
		var butSave = document.getElementById("save");
			butSave.onclick=function(){
		    var svaeHref = document.getElementById("save_href");
		    /*
		     * 传入对应想要保存的图片格式的mime类型
		     * 常见：image/png，image/gif,image/jpg,image/jpeg
		     */
		    var img = document.getElementById("save_img");
		    var tempSrc = canv.toDataURL("image/png");
		    svaeHref.href=tempSrc; 
		    img.src=tempSrc;  
		}; 

/*保存按钮*/
		/*<button class="button-balanced" id="save">save</button>
		<br />
		<a href="" download="canvas_love.png" id="save_href">
		    <img src="" id="save_img"/>
		</a>*/







