<script>
export default {
  functional: true,
  props: {
    target: Object,
    props: Object,
  },
  render(h, context) {
    let target = context.props.target,
      props = context.props.props;
    return h(target, {
      props,
    });
  },
};
</script>
