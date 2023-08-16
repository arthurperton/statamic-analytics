<script>
// import ResizeObserver from 'resize-observer-polyfill';

export default {
    props: {
        wait: {
            type: Number,
            default: 500,
        },
    },

    data() {
        return {
            sizeEmitted: false,
        };
    },

    render() {
        return this.$scopedSlots.default({});
    },

    mounted() {
        new ResizeObserver(this.onResize).observe(this.$el);
    },

    methods: {
        onResize(entries) {
            const { width, height } = entries[0].contentRect;
            const size = { width, height };

            if (!this.sizeEmitted) {
                this.$emit('size', size);

                this.sizeEmitted = true;

                return;
            }

            if (!this.timeout) {
                this.$emit('resizeStart', size);
            }

            clearTimeout(this.timeout);

            this.timeout = setTimeout(() => {
                this.$emit('resizeEnd', size);

                this.timeout = null;
            }, this.wait);
        },
    },
};
</script>
