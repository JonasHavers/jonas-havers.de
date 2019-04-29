<template>
    <img src="/jonas-havers.jpg" alt="Jonas Havers" title="Jonas Havers" class="photo">
</template>

<style scoped>
.photo {
  display: block;
  margin: 0 auto;
  width: 75%;
  border-radius: 50%;
  box-shadow: 2px 2px 4px #777;
}

@media (min-width: 420px) {
  .photo {
    margin-left: 0.8rem;
    float: right;
    width: 40%;
  }
}

@media (min-width: 720px) {
  .photo {
    width: 25%;
    margin-left: 0.8rem;
    float: right;
  }
}
</style>