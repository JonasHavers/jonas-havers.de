<template>
    <img src="/jonas-havers.jpg" alt="Jonas Havers" class="photo">
</template>

<style scoped>
.photo {
  width: 80%;
  border: 1px #777 solid;
  border-radius: 50%;
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
    width: 30%;
    margin-left: 0.8rem;
    float: right;
  }
}
</style>