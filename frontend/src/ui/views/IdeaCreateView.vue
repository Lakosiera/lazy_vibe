<script setup lang="ts">
import { useThinkStore } from '@/stores/think.store';
import { typeWriter } from '@/utils/input';
import { storeToRefs } from 'pinia';
import { ref, watch, type Ref } from 'vue';

const think = useThinkStore()

const { idea, inProcesse } = storeToRefs(think)

const readyToThink: Ref<boolean> = ref(think.ideaReadyToThink)

const instruction: Ref<string> = ref("")

watch(idea, async (idea, oldIdea) => {
    readyToThink.value = think.ideaReadyToThink

    // console.log(idea.instruction, idea.instruction != oldIdea.instruction)

    // let array = idea.instruction?.split("\n")

    typeWriter(instruction, idea.instruction || "")

    instruction.value = idea.instruction || ""

    console.log("!> ", instruction.value)
    
    // if (idea.instruction && idea.instruction.length > 0 && idea.instruction == oldIdea.instruction) {
    //     instruction.value = idea.instruction
    // }
})


function onSubmit(data: Event) {
    think.doThinking(think.idea)
}
</script>

<template>
    <div class="container-fluid py-3">
        <div class="container">
            <div class="row justify-content-md-center">
                <h5 class="h5 text-center mb-3">Есть идея!</h5>
                <div class="col-lg-8">

                    <div class="card rounded-3 shadow">
                        <div class="card-body p-2">
                            <form @submit.prevent="onSubmit">
                                <div class="lv-group">
                                    <div class="input-group">
                                        <input v-model.trim="think.idea.name" class="form-control" type="text"
                                            id="name" required placeholder="Короткое навание">
                                    </div>
                                    <div class="input-group">
                                        <textarea v-model.trim="think.idea.description" class="form-control"
                                            id="description" required placeholder="Описть идею своими слолвами"
                                            rows="6"></textarea>
                                    </div>
                                </div>

                                <div v-if="!think.ideaEmpty || think.inProcesse" class="card mt-2">
                                    <div class="card-body p-0">
                                        <div class="p-2">
                                            Инструкция к применению:
                                            <br>
                <pre class="font-comfortaa lv-instruction m-0 p-0">{{ instruction }}</pre>
                                        </div>
                                    </div>
                                    <div class="card-body p-0 text-center">
                                        <div class="d-grid gap-2 _mt-2 rounded-bottom">
                                            <button type="submit" class="btn btn-sm btn-success rounded-top-0">
                                                <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
                                                <span role="status">
                                                    Остановиь!
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div v-if="think.ideaEmpty || !think.inProcesse" class="d-grid gap-2 mt-2">
                                    <button :disabled="!readyToThink" type="submit" class="btn btn-success">
                                        <span role="status">Думай голова!</span>
                                    </button>
                                </div>
                                {{ think.inProcesse }}

                                <!-- <div class="progress mt-3" role="progressbar" aria-label="Success striped example"
                                    aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    <div class="bg-success progress-bar progress-bar-striped progress-bar-animated"
                                        style="width: 25%"></div>
                                </div> -->
                            </form>



                            <!-- <div class="d-grid gap-2 mt-2">
                                <button type="submit" class="btn btn-danger mx-auto">
                                    <span role="status">Остановиь!</span>
                                </button>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.lv-group #name {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

.lv-group #description {
    border-top-right-radius: 0;
    border-top-left-radius: 0;
}

.lv-instruction {
    //   font-family: cursive;
    padding: 1.5rem;
    //   background: #f0f0f0;  
}
</style>