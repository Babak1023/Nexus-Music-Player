
import { db, ref, set, onValue, onDisconnect, push, get, serverTimestamp } from './firebase-config.js';

const onlineRef = ref(db, 'onlineUsers');
const totalRef = ref(db, 'totalUsers');
const startRef = ref(db, 'siteStart');

const userId = crypto.randomUUID();

set(ref(db, 'onlineUsers/' + userId), { timestamp: Date.now() });
onDisconnect(ref(db, 'onlineUsers/' + userId)).remove();

if (!localStorage.getItem('visited')) {
  push(totalRef, { time: serverTimestamp() });
  localStorage.setItem('visited', 'true');
}

onValue(onlineRef, (snapshot) => {
  const count = snapshot.exists() ? Object.keys(snapshot.val()).length : 0;
  document.getElementById('onlineCount').textContent = count;
});

onValue(totalRef, (snapshot) => {
  const total = snapshot.exists() ? Object.keys(snapshot.val()).length : 0;
  document.getElementById('totalCount').textContent = total;
});

get(startRef).then((snap) => {
  if (!snap.exists()) {
    set(startRef, { startedAt: Date.now() });
  } else {
    const startedAt = snap.val().startedAt;
    setInterval(() => {
      const now = Date.now();
      const diff = now - startedAt;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);
      document.getElementById('runningTime').textContent = `${days}d ${hours}h ${mins}m ${secs}s`;
    }, 1000);
  }
});
