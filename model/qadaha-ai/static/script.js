document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('assessment-form');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = submitBtn.querySelector('span');
    const loader = document.getElementById('loader');
    const resultsSection = document.getElementById('results');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Show loading state
        btnText.style.display = 'none';
        loader.style.display = 'block';
        submitBtn.disabled = true;

        // Gather form data
        const formData = {
            user_id: 1001,
            avg_monthly_income_6m: parseFloat(document.getElementById('avg_monthly_income_6m').value),
            income_volatility_score: parseFloat(document.getElementById('income_volatility_score').value),
            avg_monthly_expenses: parseFloat(document.getElementById('avg_monthly_expenses').value),
            monthly_obligations: parseFloat(document.getElementById('monthly_obligations').value),
            ending_balance_avg: parseFloat(document.getElementById('ending_balance_avg').value),
            cashflow_stability_score: parseFloat(document.getElementById('cashflow_stability_score').value),
            proposed_installment_amount: parseFloat(document.getElementById('proposed_installment_amount').value),
            obligation_to_income_ratio: parseFloat(document.getElementById('obligation_to_income_ratio').value),
            avg_monthly_surplus: parseFloat(document.getElementById('avg_monthly_surplus').value),
        };

        try {
            const response = await fetch('/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            displayResults(data);

        } catch (error) {
            console.error('Error:', error);
            alert('حدث خطأ أثناء الاتصال بالخادم. تأكد من تشغيل API.');
        } finally {
            // Restore button state
            btnText.style.display = 'block';
            loader.style.display = 'none';
            submitBtn.disabled = false;
        }
    });

    function displayResults(data) {
        // Unhide results
        resultsSection.classList.remove('hidden');

        // Update Score
        const scorePath = document.getElementById('score-circle-path');
        const scoreText = document.getElementById('score-text');
        
        // Calculate stroke-dasharray based on score (percentage of 100)
        // Formula for dasharray is "score, 100" where score is out of 100.
        // Wait, max path length is 100 for this SVG setup.
        setTimeout(() => {
            scorePath.setAttribute('stroke-dasharray', `${data.score}, 100`);
            scoreText.textContent = data.score;
            
            // Color based on score
            if (data.score >= 80) scorePath.style.stroke = 'var(--success)';
            else if (data.score >= 50) scorePath.style.stroke = 'var(--warning)';
            else scorePath.style.stroke = 'var(--danger)';
        }, 100);

        // Update Status & Confidence
        const statusText = document.getElementById('status-text');
        statusText.textContent = data.status;
        document.getElementById('confidence-text').textContent = (data.confidence * 100).toFixed(1) + '%';
        
        if (data.status === 'Suitable') statusText.style.color = 'var(--success)';
        else if (data.status === 'Suitable with Caution') statusText.style.color = 'var(--warning)';
        else statusText.style.color = 'var(--danger)';

        // Update Risk
        document.getElementById('risk-text').textContent = data.risk_level;

        // Update Recommendations
        const recList = document.getElementById('recommendations-list');
        recList.innerHTML = '';
        data.recommendations.forEach(rec => {
            const li = document.createElement('li');
            li.textContent = rec.replace('✔', '').trim();
            recList.appendChild(li);
        });

        // Update Reasons
        const reasonsList = document.getElementById('reasons-list');
        reasonsList.innerHTML = '';
        if (data.reasons.length === 0) {
            const li = document.createElement('li');
            li.textContent = 'لا توجد عوامل سلبية مؤثرة.';
            reasonsList.appendChild(li);
        } else {
            data.reasons.forEach(reason => {
                const li = document.createElement('li');
                li.textContent = reason.replace('✔', '').trim();
                reasonsList.appendChild(li);
            });
        }

        // Update AI Explanation
        const aiExplanation = document.getElementById('ai-explanation');
        aiExplanation.innerHTML = '';
        data.ai_explanation.forEach(factor => {
            const div = document.createElement('div');
            div.className = 'factor-item';
            
            const name = document.createElement('span');
            name.className = 'factor-name';
            name.textContent = factor.feature;

            const val = document.createElement('span');
            val.className = `factor-value ${factor.direction}`;
            val.innerHTML = `${factor.direction === 'up' ? '⬆️' : '⬇️'} ${factor.value}`;

            div.appendChild(name);
            div.appendChild(val);
            aiExplanation.appendChild(div);
        });

        // Scroll to results
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }
});
