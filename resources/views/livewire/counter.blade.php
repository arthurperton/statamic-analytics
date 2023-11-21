<div>
    <div style="text-align: center">
        <h1>Hello World!</h1>

        <button wire:click="increment">+</button>
        <h1>{{ $count }}</h1>
    </div>
    
    <script>
        // Livewire.on('dataUpdated', count => {
        //     alert('The count has been increased to ' + count);
        // })
        document.addEventListener('livewire:initialized', () => {
            @this.on('dataUpdated', ([count]) => {
                console.log('The count has been increased to ' + count);
            });
        });
    </script>
</div>
