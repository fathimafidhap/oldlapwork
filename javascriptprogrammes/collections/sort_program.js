var arr = [8, 6, 2, 2, 7, 3]


//sort


//arr.sort((no1,no2)=>no1-no2);//no2 comes after no1 //to sort on decenting order. without using ths how to sort



for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {

        if (arr[i] > arr[j]) {

            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }

    }


}




