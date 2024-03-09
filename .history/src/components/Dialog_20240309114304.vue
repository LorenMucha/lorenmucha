<script></script>

<template>
    <div v-if="dialogVisible"
    class="fixed inset-0 z-[1000] outline-none focus:outline-none justify-center items-center flex !overflow-hidden">
    <div>
        <!--content-->
        <div
            class="border border-green-900 w-[900px] rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none !overflow-auto">
            <!--header-->
            <div class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                
            </div>
            <!--body-->
            <div class="flex justify-center p-5">
            </div>
            <!--footer-->
            <div class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button type="button" @click="toggleDialog()"
                    class="g-transparent hover:bg-green-100 text-green-900 font-semibold hover:text-black py-2 px-4 border border-green-900 hover:border-transparent rounded">
                    Schließen
                </button>
            </div>
        </div>
    </div>
</div>
</template>