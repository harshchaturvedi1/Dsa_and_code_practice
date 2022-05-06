 2.double traversal 
	   --------brute force--------
	   tc-O(2n)
	   
	   int a=arr[0];
	   for(int i=0;i<n;i++){
	       if(a<arr[i]){
	           a=arr[i];
	       }
	   }
	   
	   int b=arr[0];
	   for(int i=0;i<n;i++){
	       if((arr[i]<a && arr[i]>b) || (arr[i]<a && a==b)){
	           b=arr[i];
	       }
	   }
	   if(a==b)
	    return -1;
	   return b;