<template>
    <div class="contents">
        <h1>Meny</h1>
        <hr>

        <div class="menu_content">
            <div class="course">
                <h3>Förrätt</h3>
                <p>Havstoast med tångrom och gräddfil</p>
                <img src="@/assets/menu-pictures/forratt_small.JPG" alt="Förrätt" />
            </div>

            <div class="course">
                <h3>Varmrätt</h3>
                <p>Pasta med svampsås</p>
                <img src="@/assets/menu-pictures/huvudratt_small.JPG" alt="Varmrätt" />
            </div>

            <div class="course">
                <h3>Efterrätt</h3>
                <p>Flädermousse med hallonkompott</p>
                <img src="@/assets/menu-pictures/efterratt_small.JPG" alt="Eferrätt" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
  export default {
    metaInfo: {
      title: 'F-Spexet - Meny',
    },
  };
</script>

<style scoped>

.menu_content {
    /* display: flex;
    flex-direction: column; */
    text-align: center;
    gap: 2rem;
    padding-top: 1rem;
}

.course {
    text-align: left;
    margin: 0 2rem 2rem 2rem;
    display: inline-flex;
    flex-direction: column;
}

h3 {
    font-size: 2em;
    margin: 0;
}

.course img {
    max-width: 300px;
    width: 100%;
}

</style>