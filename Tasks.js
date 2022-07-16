
//Given an array of integers your solution should find the smallest integer.

   function findSmallestInt(args) {
      args.sort((a,b) => a-b)
       return args[0]
            }

   console.log(findSmallestInt([12,13,11]))