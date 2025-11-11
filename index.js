    // small interactions
    document.getElementById('ano').textContent = new Date().getFullYear();

    // demo buttons (substitua com links reais)
    document.querySelectorAll('.btn').forEach(btn=>{
      btn.addEventListener('click', (e)=>{
        const t = e.currentTarget.textContent.trim();
        if(t === 'Código') return alert('Link para o repositório ou ZIP aqui (substitua).');
        if(t === 'Demo') return alert('Link para demo pública ou deploy aqui (substitua).');
        if(e.currentTarget.href && e.currentTarget.href.startsWith('mailto:')) return;
      })
    });