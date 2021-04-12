<script>
export default {
  props: {
    vnode: {
      type: Object,
    },
  },
  functional: true,
  render(h, context) {
    const { vnode } = context.props;
    return vnode;
  },
};
</script>
