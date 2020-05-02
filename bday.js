paintings = ["The Starry Night (Van Gogh)","The Son of Man (Magritte)","Groovin High (Ringgold)","The Persistence of Memory (Dali)","Cow's Skull with Calico Roses (O'Keeffe)","Guernica (Picasso)","A Sunday on La Grande Jatte (Seurat)","American Gothic (Wood)","The Scream (Munch)","The Broken Column (Kahlo)","Jael and Sisera (Gentileschi)","The Wounded Deer (Kahlo)","The Birth of Venus (Botticelli)","Nightlife (Motley)"];

characters = ["Steven Universe","Joe Exotic","Carole Baskin","Iron Man","Lisa Simpson","Nicolas Cage","Spider-Man","Zoidberg","Wally West the Dog","Ash Williams"];

qs = ["In this 1993 comic, Godzilla is publicly humiliated by this very real person.","This nerd cult director managed to fuck up two rival franchises back to back.","This is the first playable female video game protagonist.","!!Subjective Double!!<br /><br />Which band do you think sucks, that you would agree I would also think sucks?","When did we get Wally?","In 2000, The Walking Dead creator Robert Kirkman wrote this satirical sacrilegious comic.","!!Subjective Double!!<br /><br />What popular movie is so boring, it puts you to sleep, no matter how many times you try to watch it?","2009's Resident Evil 5 jumped the shark with this perplexing moment.","Yeah, no shit Adam and Emma have seen the Mountain Goats more than any other artist. How many venues have we seen them play at, though?","Wally was named after whom?", "Adam shares a home neighborhood with this DC Comics character.","May the 4th is almost here! How many Star Wars movies has Adam seen the whole way through?","This icon of pop royalty secretly worked on the score for 1994's Sonic the Hedgehog 3","Individually, these two artists put on very different and entertaining live performances. In order to successfully tour in 2010, they needed to come together to 'Make the Bus'","!!Subjective Double!!<br /><br />Come up with a new nickname for Wally!"];

document.getElementById("shuffle").addEventListener("click", shuffle);

function shuffle() {
	var x = Math.floor((Math.random() * paintings.length) +1) -1;
	var output1 = paintings[x];

	var y = Math.floor((Math.random() * characters.length) +1) -1;
	var output2 = characters[y];

	document.getElementById("outputpaint").innerHTML =  output1;
	document.getElementById("outputchar").innerHTML = output2;
}

function question(mynum) {
	var q = qs[mynum];
	console.log(q);
	if(mynum==0){
		document.getElementById("question1").innerHTML = '<p>' + q + '</p>';
	}
	if(mynum==1){
		document.getElementById("question2").innerHTML = '<p>' + q + '</p>';
	}
	if(mynum==2){
		document.getElementById("question3").innerHTML = '<p>' + q + '</p>';
	}
	if(mynum==3){
		document.getElementById("question4").innerHTML = '<p>' + q + '</p>';
	}
	if(mynum==4){
		document.getElementById("question5").innerHTML = '<p>' + q + '</p>';
	}
	if(mynum==5){
		document.getElementById("question6").innerHTML = '<p>' + q + '</p>';
	}
	if(mynum==6){
		document.getElementById("question7").innerHTML = '<p>' + q + '</p>';
	}
	if(mynum==7){
		document.getElementById("question8").innerHTML = '<p>' + q + '</p>';
	}
	if(mynum==8){
		document.getElementById("question9").innerHTML = '<p>' + q + '</p>';
	}
	if(mynum==9){
		document.getElementById("question10").innerHTML = '<p>' + q + '</p>';
	}
	if(mynum==10){
		document.getElementById("question11").innerHTML = '<p>' + q + '</p>';
	}
	if(mynum==11){
		document.getElementById("question12").innerHTML = q;'<p>' + q + '</p>';
	}
	if(mynum==12){
		document.getElementById("question13").innerHTML = q;'<p>' + q + '</p>';
	}
	if(mynum==13){
		document.getElementById("question14").innerHTML = q;'<p>' + q + '</p>';
	}
	if(mynum==14){
		document.getElementById("question15").innerHTML = q;'<p>' + q + '</p>';
	}
}