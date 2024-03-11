<?xml version="1.0"?>
<?xml-stylesheet href="rss.xsl" type="text/xsl" media="http://search.yahoo.com/mrss/" xmlns:atom="http://www.w3.org/2005/Atom"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <xsl:for-each select="rss/channel/title">
                    <div font-weight="bold"/>
                    <span color="red"/>
                </xsl:for-each>
                <xsl:for-each select="rss/channel/description">

                </xsl:for-each>

            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>