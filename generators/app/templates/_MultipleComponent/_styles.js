import theme from '../../../theme';
import color from 'color';

const styles = {
  button: {
    background: theme.palette.turquoise,
    borderRadius: 2,
    border: 'none',
    padding: theme.padding.button,
    cursor: 'pointer',
    outline: 'none',
    boxShadow: theme.boxShadow.default,
    '&:hover': {
      background: color(theme.palette.turquoise)
        .lighten(0.4)
        .hex(),
      transition: theme.transition.button,
    },
    '&:active': {
      background: color(theme.palette.turquoise)
        .lighten(0.3)
        .hex(),
      transition: theme.transition.button,
      boxShadow: theme.boxShadow.raised,
    },
  },
  label: {
    fontWeight: theme.fontWeight.semiBold,
    fontSize: theme.fontSize.small,
    color: theme.palette.white,
    textTransform: 'uppercase',
    fontFamily: theme.fontFamily.main,
  },
};

export default styles;
