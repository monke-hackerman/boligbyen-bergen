// Midlertidig og selvstendig: fjern innlastingsblokken i index.html og denne mappen.
(() => {
    const player = document.createElement('section');
    player.id = 'group-three-player';
    player.setAttribute('aria-label', 'The Group Three Blues');
    player.innerHTML = `
        <div class="g3-heading">🎷 The Group Three Blues</div>
        <div class="g3-controls">
            <audio controls autoplay preload="metadata" aria-label="Spill The Group Three Blues"
                src="img/The%20Group%20Three%20Blues.mp3"></audio>
            <button type="button" class="g3-lyrics-button" aria-haspopup="dialog">Lyrics</button>
        </div>
        <p class="g3-status" role="status"></p>
        <dialog aria-labelledby="g3-lyrics-title">
            <div class="g3-dialog-heading">
                <h2 id="g3-lyrics-title">🎷 The Group Three Blues</h2>
                <button type="button" class="g3-close" aria-label="Lukk sangteksten" autofocus>✕</button>
            </div>
            <div class="g3-lyrics">
                <h3>[Intro – spoken]</h3>
                <p><em>Ladies and gentlemen…<br>
                Straight outta Bergen town…<br>
                Give it up for… Group Three.</em></p>

                <h3>[Verse 1]</h3>
                <p>Well, the deadline’s getting closer,<br>
                and the coffee’s running dry,<br>
                Got a hundred lines of Java,<br>
                and we don’t know quite why.<br>
                We got six men at the table,<br>
                and a baguette by my side,<br>
                Oh, we’re Group Number Three, boys,<br>
                and we’re coding through the night.</p>

                <h3>[Chorus]</h3>
                <p>Ohhh, Group Three, Group Three,<br>
                we got trouble on our screen,<br>
                Git says <em>merge conflict</em>,<br>
                Lord knows what that means.<br>
                From the streets of old Bergen,<br>
                to the halls of DATA111,<br>
                We may not know what we’re doing—<br>
                but by God, we’re getting it done.</p>

                <h3>[Verse 2]</h3>
                <p>Samuel pushed to <code>main</code> again,<br>
                now nobody makes a sound,<br>
                Marius says, “I’ll fix it,”<br>
                while the whole damn site goes down.<br>
                Someone opened up ChatGPT,<br>
                someone opened Stack Overflow,<br>
                And the baguette man keeps on eating,<br>
                saying, <em>“Boys… I think I know.”</em></p>

                <h3>[Bridge – slower]</h3>
                <p>We got HTML on Monday,<br>
                CSS by Tuesday night,<br>
                JavaScript on Wednesday—<br>
                and nothing works quite right.<br>
                But when Friday comes around, boys,<br>
                and that final build turns green…<br>
                Pour the coffee, play the trumpet—<br>
                <strong>here comes old Group Three.</strong></p>

                <h3>[Final chorus – big band]</h3>
                <p>Ohhh, Group Three, Group Three,<br>
                finest coders you’ve ever seen,<br>
                Well… maybe that’s an overstatement,<br>
                but our Git history is clean.<br>
                Six gentlemen from Bergen,<br>
                with one semester dream—<br>
                If the website loads on demo day…<br>
                <strong>THAT’S GOOD ENOUGH FOR GROUP THREE!</strong></p>

                <p>🎺 <em>Ba-da-ba-daaa…</em><br>
                🥁 <em>ba-dum—TSS!</em><br>
                🎷 <em>“GROUP THREE!”</em></p>
            </div>
        </dialog>`;

    document.querySelector('img[src="img/bryggen.jpg"]').after(player);
    const audio = player.querySelector('audio');
    const status = player.querySelector('.g3-status');
    const dialog = player.querySelector('dialog');

    player.querySelector('.g3-lyrics-button').addEventListener('click', () => dialog.showModal());
    player.querySelector('.g3-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (event) => {
        const bounds = dialog.getBoundingClientRect();
        if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right ||
            event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
    });
    audio.addEventListener('play', () => { status.textContent = ''; });
    audio.addEventListener('error', () => { status.textContent = 'Kunne ikke laste sangen.'; });
    audio.play().catch((error) => {
        status.textContent = error.name === 'NotAllowedError'
            ? 'Trykk på play for å starte sangen — nettleseren blokkerte autoplay.'
            : 'Kunne ikke starte sangen automatisk. Prøv avspillingsknappen.';
    });
})();
