<template>

<div class="associatedwithsearch">
    <h2>Find words associated with each other using the EasyWordFinder.</h2>
    <!--router links to other search types and landing page-->
    <p>
      <router-link to="/describedbysearch">Search for words described by other words.</router-link>
    </p>
    <p>
      <router-link to="/wordcompletionsearch">Word completion tool.</router-link>
    </p>
        <p>
      <router-link to="/">Home.</router-link>
    </p>
    <!--form for search function of page-->
    <form v-on:submit.prevent="findWords">
      <p>
        Search for a word by association
        <input type="text" v-model="noun">
        <button type="submit">Search</button>
      </p>
    </form>
    <!--displays spinner-->
    <spinner v-if="showSpinner"></spinner>
    <!---displays results if results are found-->
   <ul v-if="results && results.length > 0" class="results">
      <li v-for="item of results">
        <p>
          <strong>{{item.word}}</strong>
        </p>
        <p>{{item.score}}</p>
      </li>
    </ul>
    <!--prompts user for better search criteria if no results are found-->
    <div v-else-if="results && results.length==0" class="no-results">
      <h2>No Words Found</h2>
      <p>Please adjust your search to find more words.</p>
    </div>

    <ul v-if="errors && errors.length > 0" class="errors">
      <li v-for="error of errors">{{error.message}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

import CubeSpinner from '@/components/CubeSpinner';

export default {
  name: "associatedwithsearch",
  data() {
    return {
      //sets variables for search
      results: null,
      errors: [],
      noun: '',
      showSpinner: false
      
    };
  },
  //creates a method that connects with the API and retrives either relevant data, or cathes an error
  methods: {
    findWords: function() {
      this.showSpinner = true;
      axios
      //the API call
        .get("https://api.datamuse.com/words?*", {
          params: {
            rel_trg: this.noun
          }
        })
        .then(response => {
          this.showSpinner = false;
          this.results = response.data;
        })
        .catch(error => {
          this.showSpinner = false;
          this.errors.push(error);
        });
    }
  },

components:{
  spinner: CubeSpinner
}

};
</script>

<!-- CSS styles applied to this page only -->
<style scoped>
.associatedwithsearch {
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