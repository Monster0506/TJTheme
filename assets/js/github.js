async function loadGitHubData() {
    const cards = document.querySelectorAll('.github-card');
    
    for (const card of cards) {
        const user = card.dataset.user;
        const repo = card.dataset.repo;
        
        try {
            const response = await fetch(`https://api.github.com/repos/${user}/${repo}`);
            const data = await response.json();
            
            const stats = card.querySelector('.github-stats');
            
            // Basic stats that are always visible
            stats.innerHTML = `
                <div class="github-stats-basic">
                    <p>⭐ ${data.stargazers_count.toLocaleString()} stars</p>
                    <p>🔄 ${data.forks_count.toLocaleString()} forks</p>
                </div>
                <p>📝 ${data.description || 'No description available'}</p>
                <div class="github-details">
                    <button class="github-details-toggle collapsed">Show more details</button>
                    <div class="github-details-content hidden">
                        <p>👀 ${data.watchers_count.toLocaleString()} watchers</p>
                        ${data.language ? `<p>🔧 Main language: ${data.language}</p>` : ''}
                        <p>🕒 Last updated: ${new Date(data.updated_at).toLocaleDateString(undefined, {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                        })}</p>
                        <p>📊 Size: ${(data.size / 1024).toFixed(1)} MB</p>
                        <p>🔍 Open issues: ${data.open_issues_count}</p>
                    </div>
                </div>
            `;

            // Add toggle functionality
            const toggle = card.querySelector('.github-details-toggle');
            const content = card.querySelector('.github-details-content');
            
            toggle.addEventListener('click', () => {
                content.classList.toggle('hidden');
                toggle.classList.toggle('collapsed');
                toggle.textContent = content.classList.contains('hidden') 
                    ? 'Show more details' 
                    : 'Show less details';
            });

        } catch (error) {
            console.error('Error fetching GitHub data:', error);
            const stats = card.querySelector('.github-stats');
            stats.innerHTML = `
                <p>⚠️ Error loading repository data</p>
                <p>Please check the repository URL or try again later.</p>
            `;
        }
    }
}

document.addEventListener('DOMContentLoaded', loadGitHubData); 