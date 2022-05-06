// 3.single traversal of array
	   // --------------- tc--O(n)--------------
	    int a=arr[0];
	    int b=arr[0];
	    for(int i=1;i<n;i++){
	        if(arr[i]>a){
	            b=a;
	            a=arr[i];
	        }else if(arr[i]<a && arr[i]>b ){
	            b=arr[i];
	        }else if(arr[i]<a && a==b ){
	             b=arr[i];
	        }
	    }
	    
	    b = a==b ? -1 : b;