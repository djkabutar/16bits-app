import { Container, Heading, Text, Toast } from "nes-ui-react";

function Main() {
  return (
    <main>
      <div className="relative min-h-screen bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <div
          className="absolute inset-1 z-0 opacity-40"
          style={{
            backgroundImage:
              "url('https://gifdb.com/images/high/minecraft-mountain-waterfalls-8tlf1g2ya0riexqi.gif')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="main-container">
            <Toast>
              <Text>
                Welcome to 16bits keyboards, we sell the most affordable and
                high quality customizable mechanical keyboards.
              </Text>
            </Toast>
            <Toast id="foo" style={{ float: "right" }} bubblePostion="right">
              <Text size="small" color="disabled">
                16bits keyboard has complete QMK and ZMK firmware support!
              </Text>
            </Toast>

            <div className="slider-container">{}</div>

            <Heading size="large" centered>
              &lt;About Us&gt;
            </Heading>

            <Container title="&lt;A note for you, our customers&gt;">
              <Text>
                Welcome to 16bits! We at 16bits are a bunch of misfits who are
                passionate about engineering and technology.
              </Text>

              <Text>
                Our passion is diving deep into the world of low-level software,
                and that means writing a ton of code every single day. But
                here's the thing: a coder's best friend is their keyboard. It's
                with you through every late-night coding session, every
                breakthrough, and every bug fix. Unfortunately, most keyboards
                out there are either way too pricey or just don't hit the mark
                for us.
              </Text>

              <Text>
                So, we took matters into our own hands. We decided to create a
                keyboard that's perfect for our needs and tastes. And that's how
                our journey began. We're excited to share our passion project
                with you and hope you'll love it as much as we do.
              </Text>
            </Container>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
