export default {
  app: {
    textAlign: 'center',
    backgroundColor: '#33a4ff',
    color: 'white',
  },
  appWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  autoCompletionItem: {
    height: 45,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  autoCompletionWrapper: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    color: 'black',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    borderRadius: '0px 0px 3px 3px',
    marginTop: -1,
    width: '20rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 0,
    transition: 'all 1s ease',
    overflow: 'hidden',
  },
  autoCompletionWrapperHidden: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    color: 'black',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    borderRadius: '0px 0px 3px 3px',
    marginTop: -1,
    width: '20rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    transition: 'all 1s ease',
    padding: 0,
    border: 'none',
    maxHeight: 0,
  },
  autoCompletionInput: {
    border: 'none',
    borderBottom: '1px solid white',
    fontSize: '1.5em',
    outline: 'none',
    minWidth: '20em',
    textAlign: 'center',
    backgroundColor: 'transparent',
    color: 'white',
  },
  autoCompletionInputBorder: {
    borderLeft: '1px solid white',
    height: '4px'
  },
  autoCompletionInputWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end'
  }
}