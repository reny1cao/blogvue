<template>
    <form @submit.prevent="uploadFile" enctype="multipart/form-data">
        <label for="banner">Banner</label>
        <div class="dropzone">
            <input type="file" class="input-file" ref="file" @change="sendFile">
            <span class="upload-icon">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-cloud-arrow-up"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"
              />
              <path
                fill-rule="evenodd"
                d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"
              />
            </svg>
          </span>
            <p v-if="!uploading" class="call-to-action">Drag your files here</p>
            <p v-if="uploading" class="progress-bar">

            </p>
          
        </div>
        <div
          class="alert alert-dismissible fade show"
          v-if="uploadMessage"
          :class="`${uploadError ? 'alert-danger' : 'alert-success'}`"
          role="alert"
        >{{uploadMessage}}</div>
    </form> 
</template>

<script>
import axios from "axios";

export default {
    name: "Dropzone",
    data() {
        return {
            message: "",
            error: false,
            uploading: false
        }
    },
    methods: {
 
        async sendFile() {
            const file = this.$refs.file.files[0];
            const formData = new FormData();
            formData.append("file", file);

            try {
                await axios.post("http://localhost:3000/dropzone", formData);
            } catch(err) {
                this.message = err.response.data.error;
                this.error = true;
            }
        }
    }
}
</script>

<style scoped>
    .dropzone {
        min-height: 200px;
        padding: 10px 10px;
        position: relative;
        cursor: pointer;
        outline: 1px dashed rgb(148, 215 , 160);
        outline-offset: -5px;
        background: rgb(248, 249, 250);
        transition: outline-offset 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    }
    .input-file {
        opacity: 0;
        width: 100%;
        height: 200px;
        position: absolute;
        cursor: pointer;
    }
    .dropzone:hover {
        outline-offset: 0;
        box-shadow: inset 0 4px 8px 0 rgba(0, 0, 0, 0.2), inset 0 6px 15px 0 rgba(0, 0, 0, 0.19);
    }
    .dropzone .call-to-action {
        font-size: 1.2rem;
        text-align: center;
    }

</style>>
