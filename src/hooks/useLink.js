import { useHistory } from 'react-router';

const useLink = () =>{
    const history = useHistory();

    const isModifiedEvent = (event) =>
        !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);

    const isLeftClickEvent = (event) => event.button === 0;

    const isTargetBlank = (event) => {
        const target = event.target.getAttribute('target');
        return target && target !== '_self';
    };

    const linkTo = (path) => {
        const href = history.createHref({ pathname: path});

        const onClick = event => {
            if (event.defaultPrevented) {
                return;
              }
          
              // Let the browser handle links that open new tabs/windows
              if (isModifiedEvent(event) || !isLeftClickEvent(event) || isTargetBlank(event)) {
                return;
              }
          
              // Prevent regular link behavior, which causes a browser refresh.
              event.preventDefault();
          
              // Push the route to the history.
              history.push(path);
        }

        return {
            href: href,
            onClick: onClick
        }        
    }
    return {linkTo:linkTo}
}
export default useLink;