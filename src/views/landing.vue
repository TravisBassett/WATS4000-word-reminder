<template>
  
<div class="landing">
    <h2>Welcome to the EasyWordFinder.</h2>
    <p>
        These are the search types that we have available to help you remember words that you forgot.
    </p>
    <!--Vue.js router links to all three of the search pages offered on the EasyWordFinder-->
    <p>
      <router-link to="/associatedwithsearch">Search for words associated with other words.</router-link>
    </p>
    <p>
      <router-link to="/describedbysearch">Search for words described by other words.</router-link>
    </p>
    <p>
      <router-link to="/wordcompletionsearch">Word completion tool.</router-link>
    </p>
</div>
    
</template>

<!-- there is no script on this page -->

<!-- CSS styles for this page -->
<style scoped>
.landing {
  font-size: 1.4rem;
}

input[type="text"] {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #333;
  width: 300px;
  font-size: 1.4rem;
  color: #2c3e50;
  font-weight: 300;
  background: rgba(0, 0, 0, 0.02);
  padding: 0.5rem;
}
button {
  background: #333;
  padding: 0.5rem;
  font-weight: 300;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
}
h1,
h2 {
  font-weight: normal;
}

ul.results {
  list-style-type: none;
  padding: 0;
}

.results li {
  display: inline-block;
  margin: 10px;
  border: solid 1px #333;
  padding: 0.5rem;
  width: 200px;
  min-height: 100px;
  color: #fff;
  background: rgba(0, 0, 0, 0.7);
}
ul.errors {
  list-style-type: none;
}
.errors li {
  border: 1px solid red;
  color: red;
  padding: 0.5rem;
  margin: 10px 0;
}

a {
  color: #42b983;
}
</style>