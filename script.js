(function(){
  const QUESTIONS = [
    { q: "สีที่ชอบที่สุดตอนนี้คือ?", opts: ["แดง/ชมพู", "น้ำเงิน/เขียว", "ดำ/เทา", "เหลือง/ส้ม"] },
    { q: "อาหารที่กินแล้วมีความสุขที่สุดคือ?", opts: ["ของทอด", "ของหวาน", "ของเผ็ด", "ของทะเล"] },
    { q: "สิ่งที่กลัวที่สุดคือ?", opts: ["ความสูง", "แมลง/สัตว์เลื้อยคลาน", "ความมืด/ผี", "การถูกทิ้ง/สูญเสีย"] },
    { q: "เวลาว่างจริงๆ อยากทำอะไรที่สุด?", opts: ["นอนเฉยๆ", "ดูหนัง/ซีรีส์", "ออกไปข้างนอก", "เล่นเกม"] },
    { q: "ถ้าเครียดมาก มักจะ...?", opts: ["เงียบไปเลย", "อยากคุยระบาย", "กินของอร่อย", "ออกไปเดินเล่นคนเดียว"] },
    { q: "เพลงแนวไหนฟังบ่อยที่สุด?", opts: ["ป็อป", "บัลลาด/ช้าๆ", "ฮิปฮอป/R&B", "ร็อก/อินดี้"] },
    { q: "ของที่อยากได้มากที่สุดตอนนี้คือ?", opts: ["เสื้อผ้า/ของแต่งตัว", "อุปกรณ์ไอที", "ทริปเที่ยว", "เวลานอนพักผ่อน"] },
    { q: "ตื่นเช้าหรือนอนดึกมากกว่ากัน?", opts: ["ตื่นเช้าตลอด", "นอนดึกเป็นประจำ", "แล้วแต่วัน", "อยากตื่นเช้าแต่ทำไม่ได้"] },
    { q: "ถ้ามีเวลาว่าง 1 วันเต็ม อยากทำอะไรมากที่สุด?", opts: ["อยู่กับตัวเองเงียบๆ", "ไปเที่ยวกับเพื่อน/แฟน", "ทำงานอดิเรก", "นอนทั้งวัน"] },
    { q: "สิ่งที่ทำให้รู้สึกมีความสุขง่ายที่สุดคือ?", opts: ["ได้กินของอร่อย", "ได้พักผ่อนเต็มที่", "ได้อยู่กับคนที่รัก", "ได้ทำสำเร็จอะไรสักอย่าง"] },
    { q: "ถ้าให้เลือกทริปในฝัน อยากไปที่ไหน?", opts: ["ญี่ปุ่น", "ยุโรป", "เกาะ/ทะเลสวยๆ", "เที่ยวในไทย"] },
    { q: "เรื่องที่มักทำให้หงุดหงิดง่ายที่สุดคือ?", opts: ["รถติด/รอนาน", "คนไม่ตรงเวลา", "งานไม่เป็นไปตามแผน", "เสียงดังรบกวน"] }
  ];

  const QUOTES = {
    top: [
      "รักที่ดีไม่ใช่การไม่มีวันเข้าใจผิดกัน แต่คือการเลือกเข้าใจกันใหม่ทุกครั้งไป",
      "บางคู่ใช้เวลาทั้งชีวิตทำความรู้จักกัน แต่พวกคุณดูเหมือนรู้ใจกันไปหมดแล้ว",
      "หัวใจสองดวงที่เต้นเข้าจังหวะกันแบบนี้ หายากในโลกนี้เหลือเกิน"
    ],
    high: [
      "ความรักที่มั่นคงเกิดจากรายละเอียดเล็กๆ ที่เราจำกันได้ ไม่ใช่แค่คำว่ารักที่พูดออกมา",
      "ยิ่งรู้จักกันมากเท่าไหร่ ยิ่งรักในแบบที่เขาเป็นมากขึ้นเท่านั้น",
      "การเข้าใจกันไม่ได้เกิดในวันเดียว แต่พวกคุณกำลังเดินมาถูกทางแล้ว"
    ],
    mid: [
      "ทุกความต่างคือประตูสู่การรู้จักกันมากขึ้น ไม่ใช่กำแพงที่กั้นเรา",
      "ความรักไม่ได้วัดกันที่คำตอบถูกกี่ข้อ แต่วัดกันที่ความตั้งใจจะเข้าใจกันต่อไป",
      "บางทีสิ่งที่ยังไม่รู้เกี่ยวกับกันและกัน ก็คือเหตุผลที่ทำให้อยากอยู่ด้วยกันต่อไปนานๆ"
    ],
    low: [
      "การเริ่มต้นทำความรู้จักกันใหม่ ก็เป็นความรู้สึกที่หวานไม่แพ้ตอนแรกที่ตกหลุมรักกัน",
      "ไม่มีใครรู้จักกันหมดตั้งแต่วันแรก ความรักคือการค่อยๆ เรียนรู้กันไปเรื่อยๆ",
      "ทุกคำตอบที่ยังทายไม่ถูก คือเรื่องราวใหม่ที่รอให้อีกฝ่ายเล่าให้ฟัง"
    ]
  };

  const state = {
    name1: "", name2: "",
    idx: 0,
    subjectPending: null,
    score1: 0,
    score2: 0,
    guessCount1: 0,
    guessCount2: 0,
    streak: 0,
    bestStreak: 0,
    lastQuoteTier: null,
    lastQuoteText: null
  };

  const el = id => document.getElementById(id);
  const screens = ['screen-intro','screen-start','screen-handoff','screen-subject','screen-guess','screen-reveal','screen-end'];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- sound engine (synthesized, no audio files) ---------- */
  const Sound = (function(){
    let ctx = null;
    let enabled = true;
    function ensureCtx(){
      if (!ctx){
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return null;
        ctx = new AC();
      }
      if (ctx.state === 'suspended') ctx.resume();
      return ctx;
    }
    function tone(freq, startOffset, duration, opts){
      opts = opts || {};
      const c = ensureCtx();
      if (!c || !enabled) return;
      const t0 = c.currentTime + startOffset;
      const osc = c.createOscillator();
      const gain = c.createGain();
      osc.type = opts.type || 'sine';
      osc.frequency.setValueAtTime(freq, t0);
      if (opts.slideTo){
        osc.frequency.exponentialRampToValueAtTime(opts.slideTo, t0 + duration);
      }
      const peak = opts.volume != null ? opts.volume : 0.14;
      gain.gain.setValueAtTime(0.0001, t0);
      gain.gain.exponentialRampToValueAtTime(peak, t0 + 0.012);
      gain.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);
      osc.connect(gain).connect(c.destination);
      osc.start(t0);
      osc.stop(t0 + duration + 0.02);
    }
    return {
      setEnabled(v){ enabled = v; },
      isEnabled(){ return enabled; },
      unlock(){ ensureCtx(); },
      click(){ tone(720, 0, 0.06, { type:'triangle', volume: 0.08 }); },
      select(){ tone(520, 0, 0.08, { type:'sine', volume: 0.1 }); },
      handoff(){ tone(440, 0, 0.14, { type:'sine', volume: 0.09, slideTo: 660 }); },
      correct(){
        tone(587, 0, 0.11, { type:'triangle', volume: 0.12 });
        tone(880, 0.09, 0.16, { type:'triangle', volume: 0.13 });
      },
      wrong(){
        tone(300, 0, 0.18, { type:'sine', volume: 0.11, slideTo: 160 });
      },
      streak(streakLevel){
        const notes = [660, 784, 988, 1175];
        const n = Math.min(streakLevel, notes.length);
        for (let i=0;i<n;i++){
          tone(notes[i], i*0.07, 0.12, { type:'triangle', volume: 0.1 });
        }
      },
      fanfare(tier){
        const seq = tier === 'top'
          ? [523,659,784,1047]
          : tier === 'high'
          ? [523,659,784]
          : tier === 'mid'
          ? [523,587,659]
          : [392,440];
        seq.forEach((f,i) => tone(f, i*0.11, 0.22, { type:'triangle', volume: 0.12 }));
      }
    };
  })();

  document.body.addEventListener('pointerdown', () => Sound.unlock(), { once:true });

  const soundToggleBtn = el('sound-toggle');
  soundToggleBtn.addEventListener('click', () => {
    const next = !Sound.isEnabled();
    Sound.setEnabled(next);
    soundToggleBtn.textContent = next ? '🔊' : '🔇';
    if (next) Sound.click();
  });

  // Play a soft click for every button press in the game, without
  // needing to touch each individual handler.
  document.addEventListener('click', (e) => {
    if (e.target.id === 'sound-toggle') return;
    if (e.target.closest('.btn, .quote-reroll')){
      Sound.click();
    }
  });

  /* ---------- intro envelope ---------- */
  const envelope = el('envelope');
  let envelopeOpened = false;
  function openEnvelope(){
    if (envelopeOpened) return;
    envelopeOpened = true;
    envelope.classList.add('open');
    Sound.handoff();
    setTimeout(() => burst(14, false), 260);
    setTimeout(() => {
      Sound.correct();
      showOnly('screen-start');
    }, 900);
  }
  envelope.addEventListener('click', openEnvelope);
  envelope.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' '){
      e.preventDefault();
      openEnvelope();
    }
  });

  function showOnly(id){
    screens.forEach(s => {
      const node = el(s);
      const willShow = s === id;
      node.classList.toggle('hidden', !willShow);
      if (willShow){
        node.classList.remove('enter');
        void node.offsetWidth;
        node.classList.add('enter');
      }
    });
  }

  /* ---------- ambient hearts ---------- */
  function spawnAmbientHeart(){
    if (reduceMotion) return;
    const layer = el('ambient-layer');
    const span = document.createElement('span');
    const symbols = ['♡','♥','✦'];
    span.className = 'ambient-heart';
    span.textContent = symbols[Math.floor(Math.random()*symbols.length)];
    const size = 12 + Math.random()*18;
    span.style.left = Math.random()*100 + 'vw';
    span.style.fontSize = size + 'px';
    span.style.color = Math.random() > 0.5 ? 'var(--rose-dim)' : 'var(--gold-dim)';
    span.style.setProperty('--drift', (Math.random()*80-40) + 'px');
    span.style.animationDuration = (9 + Math.random()*7) + 's';
    layer.appendChild(span);
    setTimeout(() => span.remove(), 17000);
  }
  if (!reduceMotion){
    for (let i=0;i<4;i++) setTimeout(spawnAmbientHeart, i*900);
    setInterval(spawnAmbientHeart, 2200);
  }

  /* ---------- burst effect ---------- */
  function burst(count, big){
    if (reduceMotion) return;
    const layer = el('burst-layer');
    const cx = window.innerWidth/2, cy = window.innerHeight/2.4;
    const symbols = big ? ['💖','💕','✨','💗','🎉'] : ['💗','💕','✨'];
    for (let i=0;i<count;i++){
      const s = document.createElement('span');
      s.className = 'burst-heart';
      s.textContent = symbols[Math.floor(Math.random()*symbols.length)];
      const angle = Math.random()*Math.PI*2;
      const dist = (big ? 160 : 90) + Math.random()* (big ? 140 : 70);
      s.style.left = cx + 'px';
      s.style.top = cy + 'px';
      s.style.fontSize = (big ? 20 : 16) + Math.random()*14 + 'px';
      s.style.setProperty('--bx', Math.cos(angle)*dist + 'px');
      s.style.setProperty('--by', Math.sin(angle)*dist - 40 + 'px');
      s.style.setProperty('--br', (Math.random()*140-70) + 'deg');
      layer.appendChild(s);
      setTimeout(() => s.remove(), 1000);
    }
  }

  function subjectIsOne(idx){ return idx % 2 === 0; }
  function subjectName(idx){ return subjectIsOne(idx) ? state.name1 : state.name2; }
  function guesserName(idx){ return subjectIsOne(idx) ? state.name2 : state.name1; }

  el('btn-start').addEventListener('click', () => {
    state.name1 = el('name1').value.trim() || "คนที่ 1";
    state.name2 = el('name2').value.trim() || "คนที่ 2";
    state.idx = 0; state.score1 = 0; state.score2 = 0;
    state.guessCount1 = 0; state.guessCount2 = 0;
    state.streak = 0; state.bestStreak = 0;
    goHandoffToSubject(true);
  });

  function goHandoffToSubject(first){
    const sName = subjectName(state.idx);
    el('handoff-text').textContent = first
      ? `ส่งจอให้ "${sName}" ก่อน — เลือกคำตอบจริงของตัวเอง ห้ามให้อีกฝ่ายเห็นนะ!`
      : `ส่งจอให้ "${sName}" — เลือกคำตอบจริงของตัวเอง ห้ามให้อีกฝ่ายเห็นนะ!`;
    el('btn-handoff-continue').onclick = renderSubjectScreen;
    showOnly('screen-handoff');
    Sound.handoff();
  }

  function renderProgressInto(containerId){
    const wrap = el(containerId);
    wrap.innerHTML = '';
    QUESTIONS.forEach((_, i) => {
      const d = document.createElement('span');
      d.className = 'dot' + (i < state.idx ? ' done' : (i === state.idx ? ' current' : ''));
      d.textContent = '♥';
      wrap.appendChild(d);
    });
  }

  function renderStreakInto(containerId){
    const node = el(containerId);
    if (state.streak >= 2){
      node.textContent = `🔥 ถูกติดกัน ${state.streak} ข้อ!`;
    } else {
      node.textContent = '';
    }
  }

  function renderSubjectScreen(){
    renderProgressInto('progress-subject');
    renderStreakInto('streak-subject');
    const q = QUESTIONS[state.idx];
    el('subject-name').textContent = subjectName(state.idx);
    el('subject-question').textContent = q.q;
    const wrap = el('subject-options');
    wrap.innerHTML = '';
    q.opts.forEach(opt => {
      const b = document.createElement('button');
      b.className = 'opt';
      b.textContent = opt;
      b.addEventListener('click', () => {
        Sound.select();
        state.subjectPending = opt;
        goHandoffToGuesser();
      });
      wrap.appendChild(b);
    });
    showOnly('screen-subject');
  }

  function goHandoffToGuesser(){
    const gName = guesserName(state.idx);
    const sName = subjectName(state.idx);
    el('handoff-text').textContent = `ส่งจอให้ "${gName}" — ทายคำตอบของ "${sName}" ดู!`;
    el('btn-handoff-continue').onclick = renderGuessScreen;
    showOnly('screen-handoff');
    Sound.handoff();
  }

  function renderGuessScreen(){
    renderProgressInto('progress-guess');
    renderStreakInto('streak-guess');
    const q = QUESTIONS[state.idx];
    el('guesser-name').textContent = guesserName(state.idx);
    el('subject-name-2').textContent = subjectName(state.idx);
    el('guess-question').textContent = q.q;
    const wrap = el('guess-options');
    wrap.innerHTML = '';
    q.opts.forEach(opt => {
      const b = document.createElement('button');
      b.className = 'opt';
      b.textContent = opt;
      b.addEventListener('click', () => { Sound.select(); finishRound(opt); });
      wrap.appendChild(b);
    });
    showOnly('screen-guess');
  }

  function finishRound(guessAns){
    const q = QUESTIONS[state.idx];
    const trueAns = state.subjectPending;
    const isCorrect = guessAns === trueAns;
    const guesserIsOne = !subjectIsOne(state.idx);

    if (guesserIsOne){
      state.guessCount1++;
      if (isCorrect) state.score1++;
    } else {
      state.guessCount2++;
      if (isCorrect) state.score2++;
    }

    if (isCorrect){
      state.streak++;
      state.bestStreak = Math.max(state.bestStreak, state.streak);
    } else {
      state.streak = 0;
    }

    el('reveal-question').textContent = q.q;
    el('reveal-subject-name').textContent = subjectName(state.idx);
    el('reveal-true-ans').textContent = trueAns;
    el('reveal-guesser-name').textContent = guesserName(state.idx);
    el('reveal-guess-ans').textContent = guessAns;
    const box = el('reveal-box');
    const verdict = el('reveal-verdict');
    if (isCorrect){
      box.className = 'reveal-box correct';
      verdict.className = 'verdict correct';
      verdict.textContent = state.streak >= 3 ? `✓ ถูกอีกแล้ว! 🔥 x${state.streak}` : "✓ ทายถูก!";
      showOnly('screen-reveal');
      if (state.streak >= 3){
        Sound.streak(state.streak);
      } else {
        Sound.correct();
      }
      setTimeout(() => burst(state.streak >= 3 ? 16 : 10, state.streak >= 5), 60);
    } else {
      box.className = 'reveal-box wrong';
      verdict.className = 'verdict wrong';
      verdict.textContent = "✗ ทายผิด";
      showOnly('screen-reveal');
      Sound.wrong();
    }
  }

  el('btn-next').addEventListener('click', () => {
    state.idx++;
    state.subjectPending = null;
    if (state.idx >= QUESTIONS.length){
      renderEnd();
    } else {
      goHandoffToSubject(false);
    }
  });

  function tierFor(pct){
    if (pct >= 85) return 'top';
    if (pct >= 60) return 'high';
    if (pct >= 35) return 'mid';
    return 'low';
  }

  function pickQuote(tier){
    const pool = QUOTES[tier];
    let choice = pool[Math.floor(Math.random()*pool.length)];
    if (pool.length > 1 && choice === state.lastQuoteText){
      choice = pool[(pool.indexOf(choice)+1) % pool.length];
    }
    state.lastQuoteText = choice;
    return choice;
  }

  function animateMeter(pct){
    const total = 29.6;
    const h = total * (pct/100);
    const y = total - h;
    const rect = el('meterFill');
    // set to 0 first so the transition actually plays
    rect.setAttribute('y', total);
    rect.setAttribute('height', 0);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        rect.setAttribute('y', y);
        rect.setAttribute('height', h);
      });
    });
    el('meterPct').textContent = pct + '%';
  }

  function renderEnd(){
    el('end-name1').textContent = state.name1;
    el('end-name2').textContent = state.name2;
    el('end-score1').textContent = state.score1 + ' / ' + state.guessCount1;
    el('end-score2').textContent = state.score2 + ' / ' + state.guessCount2;

    const pct1 = state.guessCount1 ? Math.round((state.score1/state.guessCount1)*100) : 0;
    const pct2 = state.guessCount2 ? Math.round((state.score2/state.guessCount2)*100) : 0;
    const avgPct = Math.round((pct1 + pct2) / 2);
    const tier = tierFor(avgPct);

    let msg, detail;
    if (tier === 'top'){
      msg = "รู้ใจกันขนาดนี้ ไม่มีใครแทรกกลางได้ 💞";
      detail = `${state.name1} ทายถูก ${pct1}% และ ${state.name2} ทายถูก ${pct2}% — เข้าใจกันในระดับที่คนอื่นอิจฉา`;
    } else if (tier === 'high'){
      msg = "รู้จักกันดีทีเดียว ✨";
      detail = `${state.name1} ทายถูก ${pct1}% และ ${state.name2} ทายถูก ${pct2}% — ยังมีมุมให้ค้นหากันอีกนิดหน่อย`;
    } else if (tier === 'mid'){
      msg = "ยังมีอะไรให้เรียนรู้กันอีกเยอะ 🌙";
      detail = `${state.name1} ทายถูก ${pct1}% และ ${state.name2} ทายถูก ${pct2}% — ลองคุยเรื่องพวกนี้กันดูให้มากขึ้น`;
    } else {
      msg = "เหมือนเพิ่งเจอกันวันแรกเลย! 😅";
      detail = `${state.name1} ทายถูก ${pct1}% และ ${state.name2} ทายถูก ${pct2}% — ถือโอกาสนี้ทำความรู้จักกันใหม่ตั้งแต่ต้น`;
    }
    if (state.bestStreak >= 4){
      detail += ` (สถิติทายถูกติดกันสูงสุด ${state.bestStreak} ข้อ 🔥)`;
    }

    el('result-msg').textContent = msg;
    el('result-detail').textContent = detail;
    state.lastQuoteTier = tier;
    el('quote-text').textContent = '"' + pickQuote(tier) + '"';
    el('copy-feedback').textContent = '';

    showOnly('screen-end');
    animateMeter(avgPct);
    setTimeout(() => {
      Sound.fanfare(tier);
      burst(tier === 'top' ? 26 : (tier === 'high' ? 18 : 12), tier === 'top');
    }, 250);
  }

  el('btn-reroll-quote').addEventListener('click', () => {
    const tier = state.lastQuoteTier;
    el('quote-text').textContent = '"' + pickQuote(tier) + '"';
  });

  el('btn-copy').addEventListener('click', async () => {
    const text = `${el('result-msg').textContent}\n${el('result-detail').textContent}\n${el('quote-text').textContent}`;
    try {
      await navigator.clipboard.writeText(text);
      el('copy-feedback').textContent = 'คัดลอกแล้ว! เอาไปแชร์ได้เลย 💌';
    } catch (e) {
      el('copy-feedback').textContent = 'คัดลอกไม่สำเร็จ ลองเลือกข้อความเองนะ';
    }
    setTimeout(() => { el('copy-feedback').textContent = ''; }, 3500);
  });

  el('btn-restart').addEventListener('click', () => {
    state.idx = 0; state.score1 = 0; state.score2 = 0;
    state.guessCount1 = 0; state.guessCount2 = 0;
    state.streak = 0; state.bestStreak = 0;
    goHandoffToSubject(true);
  });

  el('btn-restart-names').addEventListener('click', () => {
    el('name1').value = '';
    el('name2').value = '';
    showOnly('screen-start');
  });

})();
