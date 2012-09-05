//ユーザーが独自に拡張する部分
Main = function()
{
	ja_SoundSet();
	ja_CanvasSet();

	var soundLisner1 = new Object();
	var soundLisner2 = new Object();
	var soundLisner3 = new Object();

	ja.imageUnitObj.addEventListener("onLoad",this);
	ja.imageUnitObj.load(["Image/Bg01.jpg" , "Image/btn01.png" , "Image/btn02.png"]);
	
	imageFlg = true;
	
	var button1;
	var button1Off;

	var button2;
	var button2Off;

	var button3;
	var button3Off;

	var audioObject = new ja.AudioClass();
	audioObject.add("sound/se.mp3");
	audioObject.add("sound/bgm.mp3");

	this.onLoad = function()
	{
		window.scrollTo(0, 1); //アドレスバーを消す

		ja.imageUnitObj.removeEventListener("onLoad",this);

		button1 = ja.imageUnitObj["btn01"];
		button1Off = ja.imageUnitObj["btn02"];

		button2 = new ja.ImageClass(ja.imageUnitObj["btn01"]);
		button2Off = new ja.ImageClass(ja.imageUnitObj["btn02"]);
		
		button3 = new ja.ImageClass(ja.imageUnitObj["btn01"]);
		button3Off = new ja.ImageClass(ja.imageUnitObj["btn02"]);

		button1Off.mouseEnabled = false;
		button2Off.mouseEnabled = false;
		button3Off.mouseEnabled = false;

		var text1 = new ja.TextClass();
		text1.px = "12px";
		text1.color = "#FF0000";
		text1.x = 110;
		text1.y = 220
		text1.text = "効果音を再生する";

		var text2 = new ja.TextClass();
		text2.px = "12px";
		text2.color = "#FF0000";
		text2.x = 110;
		text2.y = 270
		text2.text = "BGM音を再生する";

		var text3 = new ja.TextClass();
		text3.px = "12px";
		text3.color = "#FF0000";
		text3.x = 110;
		text3.y = 320
		text3.text = "BGM音を停止する";

		ja.stage.addChild(ja.imageUnitObj["Bg01"]);
		ja.stage.addChild(button1);
		ja.stage.addChild(button1Off);
		ja.stage.addChild(button2);
		ja.stage.addChild(button2Off);
		ja.stage.addChild(button3);
		ja.stage.addChild(button3Off);
		ja.stage.addChild(text1);
		ja.stage.addChild(text2);
		ja.stage.addChild(text3);
		
		button1.x = 10;
		button1.y = 200;
		
		button1Off.x = 10;
		button1Off.y = 200;
		button1Off.visible = false;
		

		button2.x = 10;
		button2.y = 250;
		
		button2Off.x = 10;
		button2Off.y = 250;
		button2Off.visible = false;
		
		button3.x = 10;
		button3.y = 300;
		
		button3Off.x = 10;
		button3Off.y = 300;
		button3Off.visible = false;

		button1.addEventListener("touchUp", soundLisner1); //指が画像の上ではなれたとき
		button1.addEventListener("touchIn", soundLisner1); //指が画像にかさなったとき
		button1.addEventListener("touchOut", soundLisner1); //指が画像からはずれたとき

		button2.addEventListener("touchUp", soundLisner2); //指が画像の上ではなれたとき
		button2.addEventListener("touchIn", soundLisner2); //指が画像にかさなったとき
		button2.addEventListener("touchOut", soundLisner2); //指が画像からはずれたとき

		button3.addEventListener("touchUp", soundLisner3); //指が画像の上ではなれたとき
		button3.addEventListener("touchIn", soundLisner3); //指が画像にかさなったとき
		button3.addEventListener("touchOut", soundLisner3); //指が画像からはずれたとき
	};

	soundLisner1.touchOut = function()
	{
		button1Off.visible = false;
	};
	
	soundLisner1.touchIn = function()
	{
		button1Off.visible = true;
	};
	
	soundLisner1.touchUp = function()
	{
		button1Off.visible = false;
		audioObject.play("se");
	};


	soundLisner2.touchOut = function()
	{
		button2Off.visible = false;
	};
	
	soundLisner2.touchIn = function()
	{
		button2Off.visible = true;
	};
	
	soundLisner2.touchUp = function()
	{
		button2Off.visible = false;
		audioObject.play("bgm");
	};

	soundLisner3.touchOut = function()
	{
		button3Off.visible = false;
	};
	
	soundLisner3.touchIn = function()
	{
		button3Off.visible = true;
	};
	
	soundLisner3.touchUp = function()
	{
		button3Off.visible = false;
		audioObject.pause("bgm");
	};
};