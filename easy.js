/* 
    * Check if 3 given integers form a Pythagorian Triplet. 
    * Pythagorian Triplet is a triplet of numbers, such that x^2 + y^2 = z^2
    *
    * true  == solution([12,5,13])
    * true  == solution([3,5,4])
    * false  == solution([8,9,7])
    * false  == solution([8,3,6])
*/ 
	
	const pythagorTriplet = nums => {
        let arr = nums.sort((a, b) => a - b);
        return Math.pow(arr[0], 2) + Math.pow(arr[1], 2) === Math.pow(arr[2], 2);
    };

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
	const  alphCheck = str => {
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

/*
    * Return an alphabet of a given string; the given string is represented as an array of characters.
    * An alphabet of a strin is the set of all distinct characters used in that string.
    *
    * "adfs"  == solution("asfsfdss")
    * "acgt"  == solution("acgtgcgagtg")
    * "1234"  == solution("4123214")
    * "+-.<>[]"  == solution("+++[><<]<-.")
*/ 
	const alphSort = (s) => {  
		return [... new Set(s)].sort().join('');  
	}
      
/*
    * Given a DNA strand, return its RNA complement. 
    * Both DNA and RNA strands are a sequence of nucleotides. 
    * DNA's nucleotides are adenine (A), cytosine (C), guanine (G) and thymidine (T). 
    * RNA's nucleotides are adenine (A), cytosine (C), guanine (G) and uracil (U). 
    * The transcribed RNA strand of a DNA strand is formed by replacing each nucleotide with its complement: G -> C, C -> G, T -> A, A -> U.
    *
    * "UGCACCAGAAUU"  == solution("ACGTGGTCTTAA")
    * "G"  == solution("C")
    * "C"  == solution("G")
    * "U"  == solution("A")
*/ 
    const dnaToRna = (s) => {  
        return dna.split('').map(e=>{
            if(e === 'G') return 'C'
            if(e === 'C') return 'G'
            if(e === 'T') return 'A'
            if(e === 'A') return 'U'
        }).join('');
    }

/*
    *Given an array, determine if the sum of all its elements is equal to 21.
    *
    * true  == solution([3,4,5,6,3])
    * true  == solution([11,10])
    * false  == solution([3,11,10])
    * false  == solution([10,10])
*/ 
	const elementsSum = arr => {
        return (
          21 ===
          arr.reduce((sum, current) => {
            return sum + current;
          }, 0)
        );
      };

/*
    * Given a string as input, reverse each word, but keep the word order the same. Words are separated by whitespaces.
    *
    * "olleH ,ereht dna woh era ?uoy"  == solution("Hello there, and how are you?")
    * "I’m Fine, Thanks. And You?"  == solution("m’I ,eniF .sknahT dnA ?uoY")
    * "ehT kciuq nworb xof spmuj revo eht yzal god"  == solution("The quick brown fox jumps over the lazy dog")
    * 
*/

    const wordReverse = s => {
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

/*
    * Given a hash map, return the keys of the elements with the smallest value. The result should be sorted alphabetically.
    *
    * ["damage","detail"]  == solution({"father":2,"detail":-7,"education":7,"morning":3,"damage":-7,"powder":5})
    * ["j"]  == solution({"k":2,"h":3,"j":1})
    * ["z"]  == solution({"o":0,"z":-2,"j":1})
    * []  == solution({})
*/

	const mapSort = h => {

        const arr = Object.entries(h).sort((a,b) => a[1] - b[1]);
        return arr.filter(([k, v])=> v === arr[0][1]).map(([k, v])=> k).sort();
    
    }