<template>
    <div class="Reviews">
        <h1>Reviews</h1>
        <div class="reviewsTable">
            <table class="Table">
                <tr>
                    <td><img class="reviewImage" :src="person1"/></td>
                        <td><img class="reviewImage" :src="person2"/></td>
                          <td><img class="reviewImage" :src="person3"/></td>
                </tr>
                <tr>
                    <td><h3>Review 1</h3></td>
                      <td><h3>Review 2</h3></td>
                        <td><h3>Review 3</h3></td>
                </tr>
                <tr>
                    <td>If you haven't seen Game of Thrones, go watch it right now. If you have 
                        then you'll totally get why this Hodor themed lorem ipsum generator is 
                        just brilliant.</td>
                     <td>If you haven't seen Game of Thrones, go watch it right now. If you have 
                        then you'll totally get why this Hodor themed lorem ipsum generator is 
                        just brilliant.</td>
                    <td>If you haven't seen Game of Thrones, go watch it right now. If you have 
                        then you'll totally get why this Hodor themed lorem ipsum generator is 
                        just brilliant.</td>
                </tr>
            </table>
        </div>


    </div>
</template>

<script>

import person1 from "../assets/robert-godwin-cdksyTqEXzo-unsplash.jpg";
import person2 from "../assets/nickolas-nikolic-iwV1-SWB4n8-unsplash.jpg";
import person3 from "../assets/fred-kearney-o-ioeoATbIM-unsplash.jpg";


export default {
    name: "Reviews",
    data: function () {

    return{
        person1: person1,
        person2: person2,
        person3: person3
    }}
}
</script>

<style scoped>

.reviewImage{
    height: 200px;
    width: 250px;
    object-fit: cover;
}

.Reviews{
    margin-top: 100px;
    margin-bottom: 100px;
    z-index: 2;
  
}

.reviewsTable{
   text-align: center;
   z-index: 2;
   padding-top: 50px;
}

.Table{
   width: 70%;
   margin: auto;
    z-index: 2;
}
</style>