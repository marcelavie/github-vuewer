<template>
  <v-container>
   <v-row>
     <v-col cols="12">
      <span v-for="path in openFolders" :key="path"><v-btn @click="listaPasta(path)"> / {{ path }} </v-btn></span>
       <v-simple-table>
         <template v-slot:default>
           <thead>
             <tr>
               <th class="text-left">Arquivos</th>
             </tr>
           </thead>
            <tbody>
							<tr v-for="content in contents" :key="content.name">
								<td v-if="isDirectory(content.type)">
                  <v-icon class="icon">mdi-folder</v-icon>
                  <button
                    class="directory teal--text text-decoration-underline"
                    @click="openDirectory(content.path)"
                  >
                    {{ content.name }}
                  </button>
								</td>
								<td v-else>
                  <v-icon class="icon">mdi-file-outline</v-icon>
                  {{ content.name }}
                </td>
							</tr>
							<div v-if="typeof previousPath == 'string'">
								<v-btn class="ma-2" outlined color="teal" @click="goBack">
                  Back
								</v-btn>
							</div>
           </tbody>
         </template>
       </v-simple-table>
     </v-col>
   </v-row>
 </v-container>
</template>

<script>

import { api } from '~api'

export default {
	props: ['repo'],
	data: () => ({
		contents: [],
		loading: false,
    directoryContent: true,
    previousPath: null,
		openFolders: [],
	}),
	methods: {
		async listaArquivos(){
			this.loading = true
			const contents = await api.listaArquivos(this.repo.owner.login, this.repo.name)
			this.contents = this.contents.concat(contents)
			this.previousPath = null
			this.loading = false
		},
		async listaPasta(path) {
      this.loading = true;
      const contents = await api.listaPasta(
        this.repo.owner.login,
        this.repo.name,
        path
      );
      let newPreviousPathList = path.split("/");
      newPreviousPathList.pop();
      const newPreviousPath = newPreviousPathList.join("/");
      this.previousPath = newPreviousPath;
      this.contents = this.contents.concat(contents);
      this.loading = false;
    },
    isDirectory(type) {
      return type == "dir";
    },
    openDirectory(path) {
      this.contents = [];
      this.listaPasta(path);
    },
    goBack() {
      if (this.previousPath == "") {
        this.contents = [];
        this.listaArquivos();
      } else {
        this.contents = [];
        this.listaPasta(this.previousPath);
      }
    },
	},
	watch: {
		repo(){
			this.contents = []
			this.listaArquivos()
		}
	}
}

 </script>
