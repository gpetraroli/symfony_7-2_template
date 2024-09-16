import {Controller} from '@hotwired/stimulus';

/*
 * This controller add two function to the flash messages
 * A timeout to automatically make the message disappear after the time limit
 * A listener on the message div to make it disappear on click
*/
export default class extends Controller {
    connect() {
        const flashMessagesEl = document.querySelector('.flash-messages');

        setTimeout(() => {
            flashMessagesEl.classList.add('fade-out');
            setTimeout(() => {
                flashMessagesEl.remove();
            }, 400);
        }, 5000);

        flashMessagesEl.addEventListener('click', (ev) => {
            const flashMessage = ev.target.closest('.flash-messages__message');
            flashMessage.remove();
        });
    }
}
