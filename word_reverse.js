/*
	 * Given a string as input, reverse each word, but keep the word order the same. Words are separated by whitespaces.
	 *
	 * "olleH ,ereht dna woh era ?uoy"  == solution("Hello there, and how are you?")
	 * "I’m Fine, Thanks. And You?"  == solution("m’I ,eniF .sknahT dnA ?uoY")
	 * "ehT kciuq nworb xof spmuj revo eht yzal god"  == solution("The quick brown fox jumps over the lazy dog")
	 * 
	*/
	
	const fn = s => {
	  return s
		.split(" ")
		.map(e => {
		  return e
			.split("")
			.reverse()
			.join("");
		})
		.join(" ");
	};
