<template>
    <v-container>
      <GithubRepo @reposelected="onRepoSelected"/>
      <!-- <GithubIssues :repo="repo"/> -->
      <GithubArquivos :repo="repo"/>
    </v-container>
  </template>
    
  <script>
    import GithubRepo from './GithubRepo';
    // import GithubIssues from './GithubIssues';
    import GithubArquivos from './GithubArquivos.vue';
    export default {
      components: {
        GithubRepo,
        // GithubIssues,
        GithubArquivos,
      },
      data: () => ({
        repo: null
      }),
      methods: {
        onRepoSelected(repo){
          this.repo = repo
        }
      }
    }
  </script>