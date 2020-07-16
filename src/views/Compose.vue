<template>
  <div class="container">
    <form @submit.prevent="uploadFile" enctype="multipart/form-data">

      <Dropzone v-on:select-banner="selectBanner"/>
    
      <div class="title">
        <label for="formGroupTitleInput">Title</label>
        <input type="text" class="form-control" v-model="title" />
      </div>
    </form>
    <div class="editor">
      <label for="formGroupTitleInput">Post</label>
      <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
        <div class="menubar">
          <button
            class="btn btn-light shadow-sm rounded"
            :class="{ 'is-active': isActive.bold() }"
            @click="commands.bold"
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-type-bold"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13H8.21zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z"
              />
            </svg>
          </button>

          <button
            class="btn btn-light shadow-sm rounded"
            :class="{ 'is-active': isActive.italic() }"
            @click="commands.italic"
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-type-italic"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.991 11.674L9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z"
              />
            </svg>
          </button>

          <button
            class="btn btn-light shadow-sm rounded"
            :class="{ 'is-active': isActive.strike() }"
            @click="commands.strike"
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-type-strikethrough"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.527 13.164c-2.153 0-3.589-1.107-3.705-2.81h1.23c.144 1.06 1.129 1.703 2.544 1.703 1.34 0 2.31-.705 2.31-1.675 0-.827-.547-1.374-1.914-1.675L8.046 8.5h3.45c.468.437.675.994.675 1.697 0 1.826-1.436 2.967-3.644 2.967zM6.602 6.5H5.167a2.776 2.776 0 0 1-.099-.76c0-1.627 1.436-2.768 3.48-2.768 1.969 0 3.39 1.175 3.445 2.85h-1.23c-.11-1.08-.964-1.743-2.25-1.743-1.23 0-2.18.602-2.18 1.607 0 .31.083.581.27.814z"
              />
              <path fill-rule="evenodd" d="M15 8.5H1v-1h14v1z" />
            </svg>
          </button>

          <button
            class="btn btn-light shadow-sm rounded"
            :class="{ 'is-active': isActive.underline() }"
            @click="commands.underline"
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-type-underline"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.313 3.136h-1.23V9.54c0 2.105 1.47 3.623 3.917 3.623s3.917-1.518 3.917-3.623V3.136h-1.23v6.323c0 1.49-.978 2.57-2.687 2.57-1.709 0-2.687-1.08-2.687-2.57V3.136z"
              />
              <path fill-rule="evenodd" d="M12.5 15h-9v-1h9v1z" />
            </svg>
          </button>

          <button
            class="btn btn-light shadow-sm rounded"
            :class="{ 'is-active': isActive.code() }"
            @click="commands.code"
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-code"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.854 4.146a.5.5 0 0 1 0 .708L2.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm4.292 0a.5.5 0 0 0 0 .708L13.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"
              />
            </svg>
          </button>

          <button
            class="btn btn-light shadow-sm rounded"
            :class="{ 'is-active': isActive.paragraph() }"
            @click="commands.paragraph"
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-paragraph"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 1h4.5a.5.5 0 0 1 0 1H11v12.5a.5.5 0 0 1-1 0V2H9v12.5a.5.5 0 0 1-1 0V1z"
              />
              <path d="M9 1v8H7a4 4 0 1 1 0-8h2z" />
            </svg>
          </button>

          <button
            class="btn btn-light shadow-sm rounded"
            :class="{ 'is-active': isActive.heading({ level: 1 }) }"
            @click="commands.heading({ level: 1 })"
          >H1</button>

          <button
            class="btn btn-light shadow-sm rounded"
            :class="{ 'is-active': isActive.heading({ level: 2 }) }"
            @click="commands.heading({ level: 2 })"
          >H2</button>

          <button
            class="btn btn-light shadow-sm rounded"
            :class="{ 'is-active': isActive.heading({ level: 3 }) }"
            @click="commands.heading({ level: 3 })"
          >H3</button>

          <button
            class="btn btn-light shadow-sm rounded"
            :class="{ 'is-active': isActive.bullet_list() }"
            @click="commands.bullet_list"
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-list-ul"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
              />
            </svg>
          </button>

          <button
            class="btn btn-light shadow-sm rounded"
            :class="{ 'is-active': isActive.ordered_list() }"
            @click="commands.ordered_list"
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-list-ol"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"
              />
              <path
                d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338v.041zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635V5z"
              />
            </svg>
          </button>

          <button
            class="btn btn-light shadow-sm rounded"
            :class="{ 'is-active': isActive.blockquote() }"
            @click="commands.blockquote"
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-blockquote-left"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm5 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
              <path
                d="M3.734 6.352a6.586 6.586 0 0 0-.445.275 1.94 1.94 0 0 0-.346.299 1.38 1.38 0 0 0-.252.369c-.058.129-.1.295-.123.498h.282c.242 0 .431.06.568.182.14.117.21.29.21.521a.697.697 0 0 1-.187.463c-.12.14-.289.21-.503.21-.336 0-.577-.108-.721-.327C2.072 8.619 2 8.328 2 7.969c0-.254.055-.485.164-.692.11-.21.242-.398.398-.562.16-.168.33-.31.51-.428.18-.117.33-.213.451-.287l.211.352zm2.168 0a6.588 6.588 0 0 0-.445.275 1.94 1.94 0 0 0-.346.299c-.113.12-.199.246-.257.375a1.75 1.75 0 0 0-.118.492h.282c.242 0 .431.06.568.182.14.117.21.29.21.521a.697.697 0 0 1-.187.463c-.12.14-.289.21-.504.21-.335 0-.576-.108-.72-.327-.145-.223-.217-.514-.217-.873 0-.254.055-.485.164-.692.11-.21.242-.398.398-.562.16-.168.33-.31.51-.428.18-.117.33-.213.451-.287l.211.352z"
              />
            </svg>
          </button>

          <button
            class="btn btn-light shadow-sm rounded"
            :class="{ 'is-active': isActive.code_block() }"
            @click="commands.code_block"
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-code-square"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
              />
              <path
                fill-rule="evenodd"
                d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z"
              />
            </svg>
          </button>

          <button class="btn btn-light shadow-sm rounded" @click="commands.horizontal_rule">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-hr"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M0 8a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5A.5.5 0 0 1 0 8z"
              />
              <path
                d="M4 3h8a1 1 0 0 1 1 1v2.5h1V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2.5h1V4a1 1 0 0 1 1-1zM3 9.5H2V12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9.5h-1V12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"
              />
            </svg>
          </button>
          <button class="btn btn-light shadow-sm rounded" @click="showImagePrompt(commands.image)">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-image"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M14.002 2h-12a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-12-1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12z"
              />
              <path
                d="M10.648 7.646a.5.5 0 0 1 .577-.093L15.002 9.5V14h-14v-2l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71z"
              />
              <path fill-rule="evenodd" d="M4.502 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
            </svg>
          </button>
          <button class="btn btn-light shadow-sm rounded" @click="commands.undo">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-arrow-90deg-left"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M6.104 2.396a.5.5 0 0 1 0 .708L3.457 5.75l2.647 2.646a.5.5 0 1 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"
              />
              <path
                fill-rule="evenodd"
                d="M2.75 5.75a.5.5 0 0 1 .5-.5h6.5a2.5 2.5 0 0 1 2.5 2.5v5.5a.5.5 0 0 1-1 0v-5.5a1.5 1.5 0 0 0-1.5-1.5h-6.5a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>

          <button class="btn btn-light shadow-sm rounded" @click="commands.redo">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-arrow-90deg-right"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M9.896 2.396a.5.5 0 0 0 0 .708l2.647 2.646-2.647 2.646a.5.5 0 1 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z"
              />
              <path
                fill-rule="evenodd"
                d="M13.25 5.75a.5.5 0 0 0-.5-.5h-6.5a2.5 2.5 0 0 0-2.5 2.5v5.5a.5.5 0 0 0 1 0v-5.5a1.5 1.5 0 0 1 1.5-1.5h6.5a.5.5 0 0 0 .5-.5z"
              />
            </svg>
          </button>
        </div>
      </editor-menu-bar>
      <editor-content class="editor__content border" :editor="editor"/>
    </div>
    <button @click="addPost" class="btn btn-light shadow-sm rounded">Publish</button>
    <div
      class="alert alert-dismissible fade show"
      v-if="publishMessage"
      :class="`${publishError ? 'alert-danger' : 'alert-success'}`"
      role="alert"
    >{{publishMessage}}</div>
  </div>
</template>

<script>
import axios from "axios";
import { Editor, EditorContent, EditorMenuBar } from "tiptap";
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  Image,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History
} from "tiptap-extensions";
import Dropzone from "../components/Dropzone.vue";

export default {
  name: "Compose",
  components: {
    EditorContent,
    EditorMenuBar,
    Dropzone
  },
  data() {
    return {
      publishMessage: null,
      publishError: false,
      banner: null,
      title: null,
      post: null,
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new Image(),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History()
        ],
        content: ``,
        onUpdate: ({ getHTML }) => {
          this.post = getHTML();
        }
      })
    };
  },
  methods: {
    async addPost() {
      try {
        await axios.post("http://localhost:3000/compose", {
          banner: this.banner,
          title: this.title,
          post: this.post
        });
        this.banner = "";
        this.title = "";
        this.editor.clearContent();
        this.post = "";
        this.publishMessage = "Publish successfully";
        this.publishError = false;
      } catch (error) {
        this.publishMessage = "Something went wrong...";
        this.publishError = true;
      }
    },
    showImagePrompt(command) {
      const src = prompt("Enter the url of your image here");
      if (src !== null) {
        command({ src });
      }
    },
    selectFile() {
      const file = this.$refs.banner.files[0];
      const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
      const MAX_SIZE = 200000;
      const tooLarge = file.size > MAX_SIZE;

      if (allowedTypes.includes(file.type) && !tooLarge) {
        this.banner = file;
        this.uploadError = false;
        this.uploadMessage = null;
      } else {
        this.uploadError = true;
        this.uploadMessage = tooLarge ? `Too large. Max size is ${MAX_SIZE/1000}Kb` : "Only images are allowed"
      }
      
    },
    async uploadFile() {
      const formData = new FormData();
      formData.append("banner", this.banner);
      try {
        await axios.post("http://localhost:3000/upload", formData);
        this.uploadMessage = "File has been uploaded";
        this.uploadError = false;
      } catch (error) {
        this.uploadMessage = error.response.data.error;
        this.uploadError = true;
      }
    },
    selectBanner(file) {
      this.banner = file;
      console.log(file)
    }
  },
  beforeDestroy() {
    this.editor.destroy();
  }
};
</script>

<style scoped>
.container {
  margin-top: 45px;
}
.editor {
  margin: 10px 0 30px 0;
}
.menubar {
  margin-bottom: 20px;
}
.btn {
  margin-right: 2px;
}
.editor__content {
  padding: 20px;
  min-height: 300px;
  background: white;
}
.editor__content:focus {
  outline: none;
}
.title {
  margin-top: 30px;
}
.alert {
    margin-top: 10px;
}
</style>