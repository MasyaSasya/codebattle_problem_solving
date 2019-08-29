/*
	 * A string is said to be complete if it contains all the characters from a to z. 
	 * Given a string, check if it's complete or not.
	 *
	 * false  == solution("wyyga")
	 * true  == solution("qwertyuioplkjhgfdsazxcvbnm")
	 * false  == solution("ejuxggfsts")
	 * true  == solution("qpwoeirutyalskdjfhgmznxbcv")
	 * false  == solution("0123456789abcdefghijklmnop")
	*/ 
  
	const fn = str => {
	  let count = 26;

	  if (str.lenth < count) return false;

	  let alph = "qwertyuioplkjhgfdsazxcvbnm".split("").sort();

	  [...new Set(str.split(""))].sort().map(item => {
		for (let i = 0; i < alph.length; i++) {
		  if (item === alph[i]) count--;
		}
	  });

	  return !count;
	};
