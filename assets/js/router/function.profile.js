export default {
    data: function() {
        return {
            data: this.$root.data.function.profile
        }
    },
    template: `<div>
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Profile</h1>
        </div>

        <!-- detail section -->
        <div class="info">
            <div v-for="(list, i) in data"> 
                <h6 class="pb-2 mb-0">{{ list.name }}</h6>
                <p class="mb-1"><b>{{ list.function }}</b></p>
                <p class="mb-1">This variable serves to {{ list.description }}. Example:</p>
                <PrismComponent class="m-0" language="php">{{ list.example.request }}</PrismComponent>
                <p class="mb-0" v-if="list.example.response">The example above will send a message to the user: <i>{{ list.example.response }}</i></p>
                <div class="alert alert-info mt-2" role="alert">
                    <p class="mb-0" v-if="list.example.visible">This returns will be visible to the user</p>
                    <p class="mb-0" v-if="!list.example.visible">This returns will not be visible to the user</p>
                </div>
                <hr>
            </div>
        </div>
        <!-- end detail section -->

    </div>`
}