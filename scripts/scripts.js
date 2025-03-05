/* Gmail Copy */
document.addEventListener('DOMContentLoaded', function() {
    const gmailIcon = document.getElementById('gmail-icon');
    const email = 'joaovictoramanciosilva@gmail.com';

    gmailIcon.addEventListener('click', function() {
        navigator.clipboard.writeText(email).then(function() {
            alert('E-mail copiado para a área de transferência!');
        }, function(err) {
            console.error('Erro ao copiar e-mail: ', err);
        });
    });
});

