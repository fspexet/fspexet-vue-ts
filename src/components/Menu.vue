<template>
    <div class="contents">
        <h1>Meny</h1>
        <hr>

        <div class="menu_content">
            <div class="course">
                <h3>Förrätt</h3>
                <p>Havstoast med tångrom och gräddfil</p>
            </div>

            <div class="course">
                <h3>Varmrätt</h3>
                <p>Pasta med svampsås</p>
            </div>

            <div class="course">
                <h3>Efterrätt</h3>
                <p>Flädermousse med hallonkompott</p>
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
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-top: 1rem;
}

h3 {
    font-size: 2em;
    margin: 0;
}

</style>